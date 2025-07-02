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
    description: 'Aplikasi kontak sederhana dengan class-based component. Data dimuat dari file lokal dan dikelola menggunakan this.state. Pengguna dapat menambah atau menghapus kontak tanpa penyimpanan permanen.',
    url: 'https://contacs-app-react.vercel.app/'
  },
  {
    title: 'Aplikasi Catatan Sederhana Berbasis React (useState)',
    image: '/assets/project5.png',
    description: 'Aplikasi catatan dengan React menggunakan useState sebagai penyimpanan sementara. Menampilkan fitur tambah dan hapus catatan secara real-time dengan tampilan antarmuka yang sederhana dan rapi.',
    url: 'https://aplikasi-catatan-sederhana-react.vercel.app/'
  },
  {
    title: 'Website Bookstore "Jendela Semesta" dengan Animasi AOS',
    image: '/assets/project6.png',
    description: 'Website toko buku statis yang dibuat dengan HTML, CSS, dan AOS. Desain modern dan responsif dengan fitur navigasi dan animasi scroll.',
    url: 'https://iksanudin28.github.io/simplebookstore_2/'
  }
];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(portfolio);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
