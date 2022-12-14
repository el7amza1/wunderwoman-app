// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";
import { renderTemplate } from "../../mjml/template";
import { renderAppplicantTemplate } from "../../mjml/applicant";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { values } = req.body;

  const msg = {
    to: `${values.email}`, // Change to your recipient
    from: "JWT <marwanashrafzaki98@gmail.com>", // Change to your verified sender
    subject: `Thanks for applying!`,
    html: `${renderTemplate(values.job)}`,
  };
  const msg2 = {
    to: `marwanashrafzaki98@gmail.com`, // Change to your recipient
    from: "marwanashrafzaki98@gmail.com", // Change to your verified sender
    subject: `New Applicant`,
    html: `${renderAppplicantTemplate(
      values.firstName,
      values.lastName,
      values.email,
      values.phone,
      values.job
    )}`,
    attachments: [
      {
        content: values.pdf,
        filename: `${values.firstName}-${values.lastName}-cv.pdf`,
        type: "application/pdf",
        disposition: "attachment",
      },
      {
        content: values.coverLetter,
        filename: `${values.firstName}-${values.lastName}-coverletter.pdf`,
        type: "application/pdf",
        disposition: "attachment",
      },
    ],
  };

  sgMail.send(msg2);

  return sgMail
    .send(msg)
    .then(() => {
      return res.status(200).json("Message Sent");
    })
    .catch((error) => {
      return res.status(403).json(error);
    });
}
