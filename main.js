var openBtn = document.querySelector("#open");
var startBtn = document.querySelector("#start");
var closeBtn = document.querySelector("#close");
var krob = document.querySelector("#krob");
var tigerElements = document.querySelectorAll("ul li img");
var randomizeInterval;
var provinces = [
  { name: "ខេត្តបាត់ដំបង", image: "images/battambang.png" },
  { name: "ខេត្តកំពង់ចាម", image: "images/kampongcham.png" },
  { name: "ខេត្តកំពង់ឆ្នាំង", image: "images/kampongchnang.png" },
  { name: "ខេត្តព្រះសីហនុ", image: "images/preahseihanu.png" },
  { name: "ខេត្តកំពង់ស្ពឺ", image: "images/kampongspeu.png" },
  { name: "ខេត្តកំពង់ធំ", image: "images/kampongthom.png" },
  { name: "ខេត្តកំពត", image: "images/kampot.png" },
  { name: "ខេត្តកោះកុង", image: "images/kohkong.png" },
  { name: "ខេត្តក្រចេះ", image: "images/kraches.png" },
  { name: "ខេត្តប៉ៃលិន", image: "images/bailin.png" },
  { name: "រាជធានីភ្នំពេញ", image: "images/phnompenh.png" },
  { name: "ខេត្តតាកែវ", image: "images/takeo.png" },
  { name: "ខេត្តព្រៃវែង", image: "images/preyveng.png" },
  { name: "ខេត្តពោធិ៍សាត់", image: "images/photsat.png" },
  { name: "ខេត្តសៀមរាប", image: "images/siemreap.png" },
  { name: "ខេត្តស្ទឹងត្រែង", image: "images/stungtreng.png" },
  { name: "ខេត្តស្វាយរៀង", image: "images/svayrieng.png" },
  { name: "ខេត្តឧត្ដរមានជ័យ", image: "images/oddarmeanchey.png" },
  { name: "ខេត្តព្រះវិហារ", image: "images/preahvihear.png" },
  { name: "ខេត្តបន្ទាយមានជ័យ", image: "images/banteaymeanchey.png" },
  { name: "ខេត្តកណ្តាល", image: "images/kandal.png" },
  { name: "ខេត្តរតនៈគិរី", image: "images/ratanakiri.png" },
  { name: "ខេត្តមណ្ឌលគិរី", image: "images/mondulkiri.png" },
  { name: "ខេត្តត្បូងឃ្មុំ", image: "images/tbongkhmum.png" },
  { name: "ខេត្តកែប", image: "images/kep.png" },
  { name: "ដេកផ្ទះ_1", image: "images/dek.png" },
  { name: "ដេកផ្ទះ_2", image: "images/dek.png" },
  { name: "ដេកផ្ទះ_3", image: "images/dek.png" },
  { name: "ដេកផ្ទះ_4", image: "images/dek.png" },
  { name: "ដេកផ្ទះ_5", image: "images/dek.png" },
  { name: "ដេកផ្ទះ_6", image: "images/dek.png" },
  { name: "ដេកផ្ទះ_7", image: "images/dek.png" },
  { name: "ដេកផ្ទះ_8", image: "images/dek.png" },
  { name: "ដេកផ្ទះ_8", image: "images/dek.png" },
  { name: "ដេកផ្ទះ", image: "images/dek.png" },
];
openBtn.addEventListener("click", function () {
  krob.classList.add("krobopen");
  krob.classList.remove("krobclose");
  clearInterval(randomizeInterval);
  randomizeInterval = null;
});

closeBtn.addEventListener("click", function () {
  krob.classList.add("krobclose");
  krob.classList.remove("krobopen");
});

startBtn.addEventListener("click", function () {
  if (krob.classList.contains("krobopen")) {
    alert("Please close the krob first to start randomization.");
    return;
  }
  if (!randomizeInterval) {
    randomizeInterval = setInterval(randomizeProvince, 100);
  }
  if (parent_krob.classList.contains("tremble_1")) {
    parent_krob.classList.remove("tremble_1");
    void parent_krob.offsetWidth;
    parent_krob.classList.add("tremble_2");
  } else if (parent_krob.classList.contains("tremble_2")) {
    parent_krob.classList.remove("tremble_2");
    void parent_krob.offsetWidth;
    parent_krob.classList.add("tremble_1");
  } else {
    parent_krob.classList.add("tremble_1");
  }
});

function randomizeProvince() {
  var randomIndex = Math.floor(Math.random() * provinces.length);
  provinceImage.src = provinces[randomIndex].image;
}
