<template>
  <div id="login">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand"
          ><router-link to="/login"
            ><img
              src="https://vaccineforthais.ais.th/Images/ais_logo.jpg"
              alt=""
              width="35"
              height="35" /></router-link
        ></a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" />

          <ul class="navbar-nav ms-auto">
            <li
              class="nav-item"
              style="
                background-color: #b8d434;
                border-radius: 360px;
                width: 35px;
                height: 35px;
              "
            >
              <a class="nav-link" role="button"><font size="2">TH</font></a>
            </li>
            <li
              class="nav-item"
              style="
                background-color: grey;
                border-radius: 360px;
                width: 35px;
                height: 35px;
              "
            >
              <a class="nav-link" role="button"><font size="2">EN</font></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <center>
        <img
          src="https://vaccineforthais.ais.th/Images/MicrosoftTeams-image.png"
          width="50%"
        />
      </center>

      <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
          <br />
          <b>บริการลงทะเบียนรับวัคซีนโควิด-19 โดย เอไอเอส</b><br />
          <font size="2"
            >จัดสรรโดย กรมการแพทย์ กระทรวงสาธารณสุข และกระทรวงคมนาคม</font
          >
          <br />
          <b>ระบุหมายเลขโทรศัพท์</b><br />
          <small id="emailHelp" class="form-text text-muted"
            ><font size="2">เพื่อล็อกอินลงทะเบียนรับวัคซีน</font></small
          >
          <div class="row">
            <div class="col-8">
              <input
                type="tel"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="0XX-XXX-XXXX"
                style="width: 275px"
                v-model="tel"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required
              />
            </div>
            <div class="col-4">
              <button
                type="button"
                class="btn btn-success"
                style="width: 250px; background-color: #b8d434; border: 0px"
                @click="validatetel()"
              >
                รับรหัส OTP ทาง SMS
              </button>
            </div>
          </div>

          <br />
          <div v-show="otp">
          ระบุรหัส OTP ที่ได้รับทาง SMS<br />
          <small id="emailHelp" class="form-text text-muted"
            ><font size="2">(รหัสผ่านมีอายุการใช้งาน 5 นาที)</font></small
          >
          <div class="row">
            <div class="col-8">
              <input
                type="number"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="XXXX"
                style="width: 275px"
              />
            </div>
            <div class="col-4">
              <router-link to="/profile"><button
                type="button"
                class="btn btn-success"
                style="width: 250px; background-color: #b8d434; border: 0px"
              >
                เข้าสู่ระบบ
              </button></router-link>
              
            </div>
          </div></div>
<br/>
          <h6 style="color: #b8d434;"><b>ข้อควรรู้ก่อนลงทะเบียนรับวัคซีน</b></h6>
<b>• กลุ่มอายุ 12-17 ปี</b><br/>
&nbsp;&nbsp;• รับวัคซีนเข็ม 3: ฉีด 2 เข็ม ครบ 120 วัน<br/><br/>

<b>กลุ่มอายุ 18 ปี ขึ้นไป</b><br/>
&nbsp;&nbsp;• รับวัคซีนเข็ม 3: ฉีด 2 เข็ม ครบ 90 วัน<br/>
&nbsp;&nbsp;• รับวัคซีนเข็ม 4: ฉีด 3 เข็ม ครบ 120 วัน<br/><br/>

<b>• สถานที่: สถานีกลางบางซื่อ</b><br/>
<b>• รอรับ SMS แจ้งผลลงทะเบียนภายใน 2 ชม.</b><br/>
<b>• 1 หมายเลข (ค่ายใดก็ได้) / 5 บัตรประชาชน บัตรชมพู หรือพาสปอร์ต</b><br/>

<br/>
<br/>
<center><button type="button" class="btn btn-success">ดูคำถามพบบ่อย</button></center>
        </div>
        <div class="col-4"></div>
      </div>
    </div>
    <br/><br/>
    <img src="https://media.discordapp.net/attachments/842089444559421470/973494302409904198/unknown.png?width=1241&height=44" width="100%">
  </div>
</template>

<script>
export default {
  data() {
    return {
      tel:'',
      otp:0,

    };
  },
  methods: {
    validatetel(){

    }
  },


};
</script>