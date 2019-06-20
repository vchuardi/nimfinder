<h1>NimF</h1>
<h5>Vincent Chuardi (13517103)</h5>

### Cara Menjalankan Aplikasi
Dengan menggunakan aplikasi yang sudah disediakan di github page [NimF](https://vchuardi.github.io/nimfinder) atau dengan npm start pada folder yang tepat

### Cara menggunakan aplikasi
1. Pengguna memasukan input berupa nama atau NIM mahasiswa pada <i>textbar</i> yang disediakan.
2. Pengguna klik <i>submit</i> atau <i>enter</i>

### Kelas-Kelas
1. Kelas App: Kelas utama yang menampilkan halaman utama.
2. Kelas SearchBar: Kelas untuk komponen pencarian. Berupa <i>textbar</i> dan tombol <i>submit</i>.

### Cara Aplikasi Bekerja
1. Aplikasi akan melakukan <i>login</i> pada saat di-<i>load</i>.
2. Aplikasi membaca input yang diberikan pengguna. Input bisa merupakan NIM atau nama dari mahasiswa yang ingin dicari.
3. Aplikasi melakukan request GET kepada API sesuai input yang diberikan pengguna.
3. Aplikasi menampilkan hasil pencarian yang diberikan oleh API.

### Library yang digunakan
1. [Axios](https://www.npmjs.com/package/axios)
2. [QueryString](https://www.npmjs.com/package/query-string)
