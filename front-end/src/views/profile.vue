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
          width="100%"
        />
      </center>
      <br />

      <div class="row">
        <div class="col-2"></div>
        <div class="col-8">
          <div class="row">
            <p style="color: #74a822">ข้อมูลผู้ลงทะเบียนรับวัคซีน</p>
            <hr style="color: #74a822; height: 3px" />
            <table>
              <tr>
                <td style="width: 50%">คำนำหน้า*</td>
                <td>
                  <div class="form-group">
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>กรุณาเลือก</option>
                      <option>นาย</option>
                      <option>นาง</option>
                      <option>นางสาว</option>
                      <option>ด.ช.</option>
                      <option>ด.ญ.</option>
                    </select>
                  </div>
                </td>
              </tr>
              <tr>
                <td>ชื่อ*</td>
                <td>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder=""
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>นามสกุล*</td>
                <td>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder=""
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>เพศ*</td>
                <td>
                  <div class="form-group">
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>กรุณาเลือก</option>
                      <option>ชาย</option>
                      <option>หญิง</option>
                    </select>
                  </div>
                </td>
              </tr>
              <tr>
                <td>วัน-เดือน-ปี เกิด*</td>
                <td>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="วัน-เดือน-ปี (พ.ศ.) 25-12-2545"
                    />
                    <label style="color: red"
                      >สำคัญ! กรุณาทวนวันเดือนปีเกิดให้ถูกต้อง</label
                    >
                  </div>
                </td>
              </tr>
              <tr>
                <td>บัตรประจำตัว*</td>
                <td>
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                    checked
                  /><label class="form-check-label" for="exampleRadios1">
                    บัตรประชาชน </label
                  >&nbsp;&nbsp;<input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                  /><label class="form-check-label" for="exampleRadios1">
                    บัตรชมพู </label
                  >&nbsp;&nbsp;<input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                  /><label class="form-check-label" for="exampleRadios1">
                    พาสปอร์ต
                  </label>
                </td>
              </tr>
              <tr>
                <td>หมายเลขบัตรประจำตัว*</td>
                <td>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder=""
                    />
                  </div>
                  <label style="color: red"
                    >สำคัญ! กรุณาทวนเลขบัตรประชาชนของคุณให้ถูกต้อง</label
                  >
                </td>
              </tr>
            </table>
          </div>
          <br />
          <div class="row">
            <p style="color: #74a822">ข้อมูลการติดต่อ</p>
            <hr style="color: #74a822; height: 3px" />
            <table>
              <tr>
                <td style="width: 50%">หมายเลขโทรศัพท์ของผู้รับวัคซีน *</td>
                <td>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      value="0XX-XXX-XXXX"
                      disabled
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Line ID</td>
                <td>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>อีเมล</td>
                <td>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                    />
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <br />
          <div class="row">
            <div class="card">
              <div
                class="card-header"
                style="background-color: #8dc63f; color: white"
              >
                <center>ที่อยู่ที่ติดต่อได้</center>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-6">
                    บ้านเลขที่*
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                    /><br />
                    หมู่บ้าน
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                    /><br />
                    ถนน*
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                    /><br />
                  </div>
                  <div class="col-6">
                    หมู่
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                    /><br />

                    อาคาร / ชั้น / ห้อง
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                    /><br />
                    ซอย
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                    /><br />
                  </div>
                </div>
                <div class="row">
                  พิมพ์ ตำบล อำเภอ จังหวัด หรือ รหัสไปรษณีย์ (อย่างใด
                  อย่างหนึ่ง) เพื่อระบุที่อยู่ของคุณ
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                  />
                  <div class="alert alert-secondary" role="alert">xxxxxxx</div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="card">
              <div class="card-header">
                <h5 style="color: #74a822">
                  เลือกสถานที่ และเข็มที่ต้องการฉีด (ชนิดวัคซีนที่ได้รับ
                  ขึ้นอยู่กับกรมการแพทย์จัดสรรในแต่ละวัน)
                </h5>
              </div>
              <div class="card-body">
                <center>
                  สถานที่ที่คุณเลือกยังไม่มีบริการฉีดวัคซีน
                  สำหรับผู้ที่มีอายุน้อยกว่า 12 ปี
                </center>
              </div>
            </div>
          </div>
          <br/>
          <div class="row">
              <p style="color: #74a822">วัน-เวลารับวัคซีน</p>
            <hr style="color: #74a822; height: 3px" />
            <div class="col-6">
              <div class="form-group">
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>-- กรุณาเลือกวัน --</option>
 
                    </select>
                  </div>
            </div>
            <div class="col-6">
              <div class="form-group">
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>-- กรุณาเลือกเวลา --</option>

                    </select>
                  </div>
            </div>
          </div>
          <br/>
          <br/>
          <center><button type="button" class="btn btn-success"
                style="width: 250px; background-color: #b8d434; border: 0px">ทำรายการ</button></center>
        </div>
        <div class="col-2"></div>
      </div>
    </div>
    <br /><br />
    <img
      src="https://media.discordapp.net/attachments/842089444559421470/973494302409904198/unknown.png?width=1241&height=44"
      width="100%"
    />
  </div>
</template>
