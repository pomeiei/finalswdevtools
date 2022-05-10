

describe('component_test', () => {
  beforeEach(() => {
     localStorage.setItem("name", 'arm')
     localStorage.setItem("id", '6208861abb4fed735f833e07')
     cy.intercept(
       {
         method: 'GET', 
         url: '/post/*', 
       },
       [{
         "_id": "6208fba540095f13f38874ee",
         "title": "ออกกำลังกายมือใหม่",
         "description": "ขอวิธีออกกำลังกายดีๆด้วยครับ",
         "tag": [
             "Sixpack",
             "ไม่ใช้อุปกรณ์",
             "หุ่นดี"
         ],
         "comment": [],
         "like": [{
          "like": true,
          "userid": "62598cb2f6047110e4303337"
        },],
         "report": [],
     },
     {
         "_id": "620fd3602c4eb2f4354e9113",
         "title": "ออกกำลังกายมือใหม่",
         "description": "ขอวิธีออกกำลังกายดีๆด้วยครับ",
         "tag": [
             "Sixpack",
             "ไม่ใช้อุปกรณ์",
             "ออกกำลังกายลดต้นขา"
         ],
         "comment": [],
         "like": [{
          "like": true,
          "userid": "62598cb2f6047110e4303337"
        },],
         "report": [],
     },
     {
         "_id": "6208f73240095f13f38874ed",
         "title": "เสริมหน้าอก",
         "description": "ขอวิธีออกกำลังกายดีๆด้วยครับ",
         "tag": [
             "Sixpack",
             "ไม่ใช้อุปกรณ์"
         ],
         "comment": [],
         "like": [{
          "like": true,
          "userid": "62598cb2f6047110e4303337"
        },],
         "report": [],
     },
     {
         "_id": "6200d458b02913c059a3b65b",
         "title": "เสริมกล้าม",
         "description": "ขอวิธีออกกำลังกายดีๆด้วยครับ",
         "tag": [
             "Sixpack",
             "หุ่นดี"
         ],
         "comment": [],
         "like": [{
          "like": true,
          "userid": "62598cb2f6047110e4303337"
        },],
         "report": [],
     },
     {
         "_id": "6200d4c5b02913c059a3b65c",
         "title": "อยากได้วิธีทั่วไป",
         "description": "ขอวิธีออกกำลังกายดีๆด้วยครับ",
         "tag": [
             "Sixpack",
             "หุ่นดี",
             "ลดความอ้วน"
         ],
         "comment": [],
         "like": [{
          "like": true,
          "userid": "62598cb2f6047110e4303337"
        },],
         "report": [],
     },
     {
         "_id": "6200d3e9b02913c059a3b656",
         "title": "ออกกำลังกายต้นขา",
         "description": "ขอวิธีออกกำลังกายดีๆด้วยครับ",
         "tag": [
             "Sixpack"
         ],
         "comment": [],
         "like": [{
          "like": true,
          "userid": "62598cb2f6047110e4303337"
        },],
         "report": [],
     }] 
     ).as('getPost') 
     cy.intercept(
       {
         method: 'GET', 
         url: '/user/*', 
       },
       [{
         "_id": "62073b323436e1d3be63c7b0",
         "user_name": "armphanu",
         "password": "armzaz3612",
         "phone_number": "0938955768",
         "email": "armzazgakkub@gmail.com",
         "first_name": "Phanupong",
         "last_name": "Janlek",
         "tag": [
             "หุ่นดี",
             "Sixpack",
             "ไม่ใช้อุปกรณ์",
             "test"
         ],
         "__v": 0
     },
     {
         "_id": "6208e771b0118b533974c628",
         "user_name": "jamew000",
         "password": "jamew000",
         "phone_number": "jamew000",
         "email": "jamew000",
         "first_name": "jamew000",
         "last_name": "jamew000",
         "tag": [
             "ไม่ใช้อุปกรณ์",
             "Sixpack"
         ],
         "__v": 0
     },
     {
         "_id": "620fd26570232a41a0166902",
         "user_name": "thanawat12",
         "password": "thanawat12",
         "phone_number": "thanawat12",
         "email": "thanawat12",
         "first_name": "thanawat12",
         "last_name": "thanawat12",
         "tag": [
             "ออกกำลังกายลดต้นขา",
             "หุ่นดี"
         ],
         "__v": 0
     }] 
     ).as('getUserMatch') 
     cy.intercept(
        {
          method: 'PUT', 
          url: '/profile/*', 
        },
        [] 
      ).as('pUsers'),
      cy.intercept(
        {
          method: 'GET', 
          url: '/specificpost//*', 
        },
        [
          {
              "_id": "62598da7f6047110e43033a3",
              "title": "dad",
              "userid": "62598cb2f6047110e4303337",
              "description": "waddawd",
              "tag": [
                  "หุ่นดี",
                  "ลดความอ้วน"
              ],
              "comment": [],
              "like": [
                  {
                      "like": true,
                      "userid": "62598cb2f6047110e4303337"
                  },
                  {
                      "like": true,
                      "userid": "61ffe6be3194d246d393a2b2"
                  },
                  {
                      "like": true,
                      "userid": ""
                  },
                  {
                      "like": true,
                      "userid": ""
                  },
                  {
                      "like": true,
                      "userid": ""
                  },
                  {
                      "like": true,
                      "userid": ""
                  },
                  {
                      "like": true,
                      "userid": ""
                  },
                  {
                      "like": true,
                      "userid": ""
                  },
                  {
                      "like": true,
                      "userid": ""
                  },
                  {
                      "like": true,
                      "userid": ""
                  }
              ],
              "report": [],
              "__v": 0
          }
      ]
      ).as('Like') 
     cy.intercept(
        {
          method: 'GET', 
          url: '/login/*',
        },
        [{
           "_id": "6208861abb4fed735f833e07",
           "user_name": "armzaz",
           "password": "armzaz3612",
           "phone_number": "0938955768",
           "email": "armzazgakkub@gmail.com",
           "first_name": "Phanupong",
           "last_name": "Janlek",
           "tag": [
               "หุ่นดี",
               "ไม่ใช้อุปกรณ์",
               "Sixpack"
           ],
           "__v": 0
       }] // and force the response to be: []
      ).as('getUsers') // and assign an alias
   })
  
   it('Go to edit profile page', () => {
     cy.visit('https://exercise-commu-app123.herokuapp.com/profile')
     cy.get('.edit_profile').click()
     cy.url().should('eq', 'https://exercise-commu-app123.herokuapp.com/editProfile')
     
     
          
   })
   it('check tag appear', () => {
     cy.get('.btn-danger').should('have.length', 3)
   })
   
   it('get post', () => {
     cy.visit('https://exercise-commu-app123.herokuapp.com')
     cy.get('.card').should('have.length', 9)
   })

   it('like post', () => {
    cy.visit('https://exercise-commu-app123.herokuapp.com')
    cy.get(':nth-child(1) > .card > .card-header > a').click()
    cy.get('#love > span').should('have.text', '10')
   })
   it('click like post', () => {
    cy.get('#love > .bi').click()
    cy.get('#love > span').should('have.text', '11')
   })
   
   
 })