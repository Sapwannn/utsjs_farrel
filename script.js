class jenisHewan {
  constructor(jenis, nama, bahagia, energi, warna, warnaMata, panjang, berat) {
    this.jenis = jenis;
    this.nama = nama;
    this.kebahagiaan = bahagia;
    this.energi = energi;
    this.warna = warna;
    this.warnaMata = warnaMata;
    this.panjang = panjang;
    this.berat = berat;
  }

  main(jam) {
    this.kebahagiaan += jam;
    this.energi -= jam;
    alert(`kebahagiaan ${this.nama} setelah main selama ${jam}jam bertambah menjadi: ${this.kebahagiaan}`)
    alert(`dan energi mu berkurang ${jam}`)
  }

  makan(porsi) {
    this.energi += porsi * 2;
    alert(`energi ${this.nama} setelah makan: ${this.energi}`);
  }

  tidur(jam){
    this.energi += jam;
    alert(`energi ${this.nama} setelah tidur selama ${jam} jam bertambah menjadi: ${this.energi}`)
  }

}

let rubah = new jenisHewan(
 "Rubah betina",
  "Foxy",
  10,
  100,
  "coklat",
  "biru",
  "41cm",
  "20kg"
);
console.table(rubah);

// 2

// button a

const buttonA = document.getElementById("click");
buttonA.addEventListener("click", function () {
  const hBaru = document.createElement("h2");
  const textHbaru = document.createTextNode("Berhasill!!");
  hBaru.appendChild(textHbaru);

  const sectionB = document.getElementById("b");
  sectionB.appendChild(hBaru);
});

buttonA.addEventListener("dblclick", function () {
  alert("Tombol di klik 2 kali");
});

// button b

const buttonB = document.getElementById("mouse");
buttonB.addEventListener("mouseenter", function () {

    const hBaru = document.createElement("h4");
    const textHbaru = document.createTextNode("X RPL");
    hBaru.style.color = 'red'
    hBaru.appendChild(textHbaru);
  
    const sectionB = document.getElementById("b");
    sectionB.appendChild(hBaru);
});

// biar gak bikin element baru lagi gimana pak?

buttonB.addEventListener('mouseout', function(){

    const ganti = document.querySelector('h4');
    ganti.style.color = 'green';
})




// button c

const buttonC = document.getElementById("remove");
buttonC.addEventListener("click", function () {
  const hapus = document.getElementsByTagName("body")[0];
  hapus.remove();
});
