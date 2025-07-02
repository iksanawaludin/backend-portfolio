let messages = []; // Data dummy, tidak permanen

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Semua field harus diisi' });
    }

    messages.push({ name, email, message, date: new Date() });
    console.log('Pesan masuk:', { name, email, message });

    return res.status(200).json({ success: true, message: 'Pesan berhasil dikirim' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
