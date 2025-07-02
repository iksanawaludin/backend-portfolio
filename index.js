const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Data dummy: Portfolio
const portfolio = [
  {
    title: 'Desain UI/UX Sistem Inventaris POS Mobile Apps',
    image: '/assets/project1.png',
    description: 'Desain dan prototipe aplikasi pengelolaan stok berbasis web dan mobile dengan fitur multi-role seperti admin, kasir, owner, dan stock counter.',
    url: 'https://www.figma.com/design/2KITlJ0Qpa0ieiuwTaPSiR/Design-FE-Inventori-POS?node-id=367-2028&t=DUHri5OXHHtG6PEv-1'
  },
  {
    title: 'Website Portofolio Pribadi V1.0',
    image: '/assets/project2.png',
    description: 'Website landing page portofolio pertama dengan menggunakan styling Tailwind CSS.',
    url: 'https://iksanudin28.github.io/portofolio_iksan/'
  },
  {
    title: 'Desain UI/UX Website Marketplace KambingFresh',
    image: '/assets/project3.png',
    description: 'Desain dan prototipe website marketplace seputar peternakan kambing yang dilengkapi fitur jual beli, edukasi, serta pengelolaan toko dan statistik penjualan.',
    url: 'https://www.figma.com/design/4k2scN4amReQOHfVSV8OR4/Design--Massive-Project-?node-id=0-1&t=YutQVPuLLkXxKcjw-1'
  },
  {
    title: 'Aplikasi Kontak Sederhana Berbasis React (Class Component)',
    image: '/assets/project4.png',
    description: 'Aplikasi kontak sederhana dengan class-based component. Data dimuat dari file lokal dan dikelola menggunakan this.state.',
    url: 'https://contacs-app-react.vercel.app/'
  },
  {
    title: 'Aplikasi Catatan Sederhana Berbasis React (useState)',
    image: '/assets/project5.png',
    description: 'Aplikasi catatan dengan React menggunakan useState sebagai penyimpanan sementara.',
    url: 'https://aplikasi-catatan-sederhana-react.vercel.app/'
  },
  {
    title: 'Website Bookstore "Jendela Semesta" dengan Animasi AOS',
    image: '/assets/project6.png',
    description: 'Website toko buku statis yang dibuat dengan HTML, CSS, dan AOS.',
    url: 'https://iksanudin28.github.io/simplebookstore_2/'
  },
];

// Data dummy: Pesan dari kontak
const messages = [];

// GET: Ambil semua data portfolio
app.get('/portfolio', (req, res) => {
  res.json(portfolio);
});

// POST: Tambah data portfolio baru
app.post('/portfolio', (req, res) => {
  const { title, image, description, url } = req.body;
  if (!title || !image || !description || !url) {
    return res.status(400).json({ error: 'Semua field harus diisi.' });
  }

  portfolio.push({ title, image, description, url });
  res.json({ success: true, message: 'Project berhasil ditambahkan!', data: portfolio });
});

// POST: Kirim pesan dari kontak
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Semua field harus diisi' });
  }

  messages.push({ name, email, message, date: new Date() });
  res.json({ success: true, message: 'Pesan berhasil dikirim!' });
});

// Admin Panel (HTML UI)
app.get('/admin', (req, res) => {
  const html = `
    <html>
      <head>
        <title>Admin Panel</title>
        <style>
          body { font-family: sans-serif; padding: 40px; background: #f9fafb; }
          h1 { color: #1e293b; }
          .card {
            margin-top: 30px;
            padding: 20px;
            border-radius: 12px;
            background: white;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            max-width: 400px;
          }
          a {
            display: inline-block;
            margin-top: 10px;
            padding: 10px 20px;
            background-color: #0ea5e9;
            color: white;
            text-decoration: none;
            border-radius: 8px;
          }
          a:hover {
            background-color: #0369a1;
          }
        </style>
      </head>
      <body>
        <h1>Admin Panel</h1>
        <div class="card">
          <h2>Lihat Data</h2>
          <a href="/view/portfolio" target="_blank">📁 Lihat Project Portfolio</a><br/>
          <a href="/view/contact" target="_blank">📨 Lihat Pesan Kontak</a>
        </div>
      </body>
    </html>
  `;
  res.send(html);
});

// View Project Portfolio
app.get('/view/portfolio', (req, res) => {
  let html = `
    <h1>Daftar Portfolio</h1>
    <ul>
      ${portfolio.map(p => `
        <li>
          <strong>${p.title}</strong><br/>
          <img src="${p.image}" alt="" width="100"/><br/>
          ${p.description}<br/>
          <a href="${p.url}" target="_blank">Lihat</a>
        </li><hr/>
      `).join('')}
    </ul>
  `;
  res.send(html);
});

// View Pesan Kontak
app.get('/view/contact', (req, res) => {
  let html = `
    <h1>Daftar Pesan Kontak</h1>
    <ul>
      ${messages.map(m => `
        <li>
          <strong>${m.name}</strong> (${m.email})<br/>
          <em>${new Date(m.date).toLocaleString()}</em><br/>
          <p>${m.message}</p>
        </li><hr/>
      `).join('')}
    </ul>
  `;
  res.send(html);
});

// Root
app.get('/', (req, res) => {
  res.send('Server Express berjalan!');
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
