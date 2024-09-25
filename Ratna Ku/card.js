
let highestZ = 1;

class Paper {
  holdingPaper = false;
  mouseTouchX = 0;
  mouseTouchY = 0;
  mouseX = 0;
  mouseY = 0;
  prevMouseX = 0;
  prevMouseY = 0;
  velX = 0;
  velY = 0;
  rotation = Math.random() * 30 - 15;
  currentPaperX = 0;
  currentPaperY = 0;
  rotating = false;

  init(paper) {
    document.addEventListener('mousemove', (e) => {
      if(!this.rotating) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
        
        this.velX = this.mouseX - this.prevMouseX;
        this.velY = this.mouseY - this.prevMouseY;
      }
        
      const dirX = e.clientX - this.mouseTouchX;
      const dirY = e.clientY - this.mouseTouchY;
      const dirLength = Math.sqrt(dirX*dirX+dirY*dirY);
      const dirNormalizedX = dirX / dirLength;
      const dirNormalizedY = dirY / dirLength;

      const angle = Math.atan2(dirNormalizedY, dirNormalizedX);
      let degrees = 180 * angle / Math.PI;
      degrees = (360 + Math.round(degrees)) % 360;
      if(this.rotating) {
        this.rotation = degrees;
      }

      if(this.holdingPaper) {
        if(!this.rotating) {
          this.currentPaperX += this.velX;
          this.currentPaperY += this.velY;
        }
        this.prevMouseX = this.mouseX;
        this.prevMouseY = this.mouseY;

        paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px) rotateZ(${this.rotation}deg)`;
      }
    })

    paper.addEventListener('mousedown', (e) => {
      if(this.holdingPaper) return; 
      this.holdingPaper = true;
      
      paper.style.zIndex = highestZ;
      highestZ += 1;
      
      if(e.button === 0) {
        this.mouseTouchX = this.mouseX;
        this.mouseTouchY = this.mouseY;
        this.prevMouseX = this.mouseX;
        this.prevMouseY = this.mouseY;
      }
      if(e.button === 2) {
        this.rotating = true;
      }
    });
    window.addEventListener('mouseup', () => {
      this.holdingPaper = false;
      this.rotating = false;
    });
  }
}

const papers = Array.from(document.querySelectorAll('.paper'));

papers.forEach(paper => {
  const p = new Paper();
  p.init(paper);
});
document.addEventListener("DOMContentLoaded", function () {
  const lyrics = [
    "aku mohon baca ini dengan baik ya, aku harap apa yg ku sampaikan ini bisa mu pahami, (ini lumayan panjang sayang maaf) ",
    "maaf bila ada kesalahan pada ucapan ku ini sayang, aku minta maaf",
    "dengan bahasa ku yg tidak terstrukutur ini",
    "sayang, maafkan aku, aku merasa ada salah kepada diri mu ",
    "sifat mu berbeda banget sekarang setelah carka ini",
    "kamu lebih jarang ngobrol dengan diri ku, seperti mu menjaga jarak dengan diri ku",
    "aku gak tau salah aku dimana tpi itu yg aku rasakan sayang",
    "jadi aku mohon sayang, beritau kenapa sayangg?",
    "seberapapun sakitnya itu untuk diri ku kalau memang aku salah",
    "beritahu sayang, sakit dan salah aku dimana sayang",
    "aku setiap malam setiap saat semenjak itu, aku kepikiran khawatir sekali dimana kesalahan ku",
    "setiap saat aku nangis, apa salah aku ini yg udah aku perbuat kepada mu sayang",
    "aku gk mau mu jauh sayang, aku gk mau mu pergi, aku sayang banget dengan mu sayang",
    "aku sangat sayang banget dengan diri mu sayang",
    "aku merasa seperti feeling lonely, kesepin banget, aku memang tidak sempurna sekali",
    "disamping itu aku berusaha berubah untuk menjadi pribadi cowo yg mu inginkan",
    "aku sering ngomong maaf karena trauma masa laluku dri kecil yg masih membekas sampai sekarang ",
    "sakit sekali rasanya dan tidak nyama banget rasnya ini. ",
    "jadi, sayang maaf aku sering nanya kenapa, ada apa, DLLnya sampai kamu marahh aku minta maaf",
    "aku hanya memastikan diri ku ada salag atau tidak sayangg, tidkabermaksud apa - apa ",
    "aku nanya risih endak, waktu ini itu aku gk bermaksud bagaimana pure nanya aja sayangg soalnya aku sadar aku nyemap waktu itu ",
    "tpi kembali lagi itu sayang kenapa aku nanya hal itu krn iya kamu beda sayang, mau jarang ngomong degn diriku, aku tau sibuk sayang aku paham ",
    "bedanya ini jarangan ngobrolnya kyk menjaga jarak dengan diri ku sayang",
    "aku minta maaf bila aku ada salah yg aku tidak tau dri perbuatan maupun ucapan ku sayangg",
    "aku sayang sekali ama muu, love youu",
      
  ];

  const delay = 70; 
  const lyricsElement = document.getElementById("lyrics");

  async function displayLyrics() {
      for (const line of lyrics) {
          for (const char of line) {
              const charElement = document.createElement("span"); 
              charElement.textContent = char;
              charElement.style.animation = "glow 12s ease-in-out"; 
              charElement.style.fontSize = "40px";
              lyricsElement.appendChild(charElement); 

              await new Promise((resolve) => setTimeout(resolve, delay));

              
              charElement.style.animation = "";
          }

          lyricsElement.appendChild(document.createElement("br")); 

          await new Promise((resolve) => setTimeout(resolve, delay * 25));

          lyricsElement.textContent = "";

          await new Promise((resolve) => setTimeout(resolve, delay * 35));
      }

      setTimeout(function () {
          window.location.href = "yournexthtmlfile.html"; 
      }, 700);
  }
  
  displayLyrics();
});
