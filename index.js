export default function handler(req, res) {
  // Aquí iría el código para enviar correo (puede ser con Nodemailer o Mailgun)
  res.status(200).json({ mensaje: "correo exitosamente" });
}