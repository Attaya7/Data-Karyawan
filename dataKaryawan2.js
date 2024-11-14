const daftarKaryawan = [
    {
        nama: "Devyn_Ramirez",
        kelamin: "Laki-laki",
        mKerja: "10",
        pengalaman: "Senior",
        gaji: "7.000.000"
    },
    {
        nama: "Harmony_Duncan",
        kelamin: "Laki-laki",
        mKerja: "5",
        pengalaman: "Junior",
        gaji: "4.000.000"

    },
    {
        nama: "Clarissa_Burgess",
        kelamin: "Perempuan",
        mKerja: "8",
        pengalaman: "Senior",
        gaji: "7.000.000"
    },
    {
        nama: "Reilly_Blanchard",
        kelamin: "Perempuan",
        mKerja: "7",
        pengalaman: "Senior",
        gaji: "7.000.000"
    },
    {
        nama: "Zion_Brooks",
        kelamin: "Laki-laki",
        mKerja: "4",
        pengalaman: "Junior",
        gaji: "4.000.000"
    },
    {
        nama: "Jovanny_Mays",
        kelamin: "Laki-laki",
        mKerja: "10",
        pengalaman: "Senior",
        gaji: "7.000.000"
    },
    {
        nama: "Cindy_Chase",
        kelamin: "Perempuan",
        mKerja: "9",
        pengalaman: "Senior",
        gaji: "7.000.000"
    },
    {
        nama: "Kristin_Mcdaniel",
        kelamin: "Perempuan",
        mKerja: "8",
        pengalaman: "Senior",
        gaji: "7.000.000"
    },
    {
        nama: "Macey_Sanford",
        kelamin: "Laki-laki",
        mKerja: "7",
        pengalaman: "Senior",
        gaji: "7.000.000"
    },
    {
        nama: "Alfredo_Faulkner",
        kelamin: "Laki-laki",
        mKerja: "10",
        pengalaman: "Senior",
        gaji: "7.000.000"
    }
]

const tampilkanKaryawan = () => {
    const tblKaryawan = document.getElementById("tblKaryawan")
    tblKaryawan.innerHTML = ""
    tblKaryawan.innerHTML += `<tr><th scope="col">#</th><th scope="col">Nama</th><th scope="col">Kelamin</th><th scope="col">Masa Kerja</th><th scope="col">Pengalaman</th><th scope="col">Gaji</th><th scope="col">Edit</th><th scope="col">Hapus</th></tr>`

for(let i in daftarKaryawan) {
    console.log (`
        ${parseInt(i)+1.}. ${daftarKaryawan[i].nama} \n
        kelamin    = ${daftarKaryawan[i].kelamin} \n
        mKerja     = ${daftarKaryawan[i].mKerja} \n
        pengalaman = ${daftarKaryawan[i].pengalaman} \n
        gaji       = ${daftarKaryawan[i].gaji}
    `)

    tblKaryawan.innerHTML += `<tr><th>${parseInt(i)+1.}</th><td>${daftarKaryawan[i].nama}</td><td>${daftarKaryawan[i].kelamin}</td><td>${daftarKaryawan[i].mKerja}</td><td>${daftarKaryawan[i].pengalaman}</td><td>${daftarKaryawan[i].gaji}</td><td><button class="btn btn-warning" onclick=editKaryawan("${daftarKaryawan[i].nama}")>Edit</button></td><td><button class="btn btn-danger" onclick=hapusKaryawan("${daftarKaryawan[i].nama}")>Hapus</button></td></tr>`
}
}

let mode = `tambah`

const tambahKaryawan = () => {
    let nama = document.getElementById("txtNama").value
    let kelamin = document.getElementById("txtKelamin").value
    let mKerja = document.getElementById("txtMKerja").value
    let pengalaman = document.getElementById("txtPengalaman").value
    let gaji = document.getElementById("txtGaji").value

    const karyawanBaru = {
        nama: nama,
        kelamin: kelamin,
        mKerja: mKerja,
        pengalaman: pengalaman,
        gaji: gaji
    }

    if(mode == `tambah`) {
        daftarKaryawan.push(karyawanBaru)
    } else {
        daftarKaryawan[mode] = karyawanBaru
    }

    document.getElementById("txtNama").value = ""

    mode = `tambah`
}

const hapusKaryawan = (target) => {
    const indexDihapus = cariIndex(target)
    daftarKaryawan.splice(indexDihapus, 1)
    document.getElementById("txtNama").value = ""
    document.getElementById("txtKelamin").value = ""
    document.getElementById("txtMKerja").value = ""
    document.getElementById("txtPengalaman").value = ""
    document.getElementById("txtGaji").value = ""
}

const cariIndex = (finder) => {
    for (let j=0 ; j < daftarKaryawan.length ; j++) {
        if (daftarKaryawan[j].nama == finder) {
            return j
        }
    }
}

const editKaryawan = (target) => {
    const indexEdit = cariIndex(target)

    
    console.log(target)
    console.log(indexEdit)
    console.log(daftarKaryawan[indexEdit])
    

    const karyawanDiedit = daftarKaryawan[indexEdit]
    
    document.getElementById(`txtNama`).value = karyawanDiedit.nama
    document.getElementById(`txtKelamin`).value = karyawanDiedit.kelamin
    document.getElementById(`txtMKerja`).value = karyawanDiedit.mKerja
    document.getElementById(`txtPengalaman`).value = karyawanDiedit.pengalaman
    document.getElementById(`txtGaji`).value = karyawanDiedit.gaji

    mode = indexEdit

}
