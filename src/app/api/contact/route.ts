import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// import ElasticEmail from '@elasticemail/elasticemail-client';


export async function POST(request: NextRequest){
    // const {senderName, senderEmail, senderSubject, senderMsg} = JSON.parse(request)
    const data = await request.json()
    // console.log(data)

    // const msg = {
    //     to: '<your-email@example.com',
    //     from: email,
    //     subject,
    //     name,
    //     text: message,
    //   };
    
 
    //   let defaultClient = ElasticEmail.ApiClient.instance;
       
    //   let apikey = defaultClient.authentications['apikey'];
    //   apikey.apiKey = process.env.EMAIL_API_KEY || ""
       
    //   let api = new ElasticEmail.EmailsApi()
       
    //   let email = ElasticEmail.EmailMessageData.constructFromObject({
    //     Recipients: [
    //       new ElasticEmail.EmailRecipient("chirag.dev18@gmail.com")
    //     ],
    //     Content: {
    //       Body: [
    //         ElasticEmail.BodyPart.constructFromObject({
    //           ContentType: "HTML",
    //           Content: "My test email content ;)"
    //         })
    //       ],
    //       Subject: data.senderMsg,
    //       From: data.senderEmail
    //     }
    //   });
       
    //   var callback = function(error : any, data : any, response : any) {
    //     if (error) {
    //       console.error(error);
    //     } else {
    //       console.log('API called successfully.');
    //     }
    //   };
    //   api.emailsPost(email, callback);      
}