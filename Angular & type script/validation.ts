//import { ValidatorFn, FormArray } from '@angular/forms';

export class CustomValidator {
   // Validates URL
   static urlValidator(url): any {
      if (url.pristine) {
         return null;
      }
      const URL_REGEXP = /^(http?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
      url.markAsTouched();
      if (URL_REGEXP.test(url.value)) {
         return null;
      }
      return {
         invalidUrl: true
      };
   }

   // Validates passwords
   static matchPassword(group): any {
      const password = group.controls.password;
      const confirm = group.controls.confirm;
      if (password.pristine || confirm.pristine) {
         return null;
      }
      group.markAsTouched();
      if (password.value === confirm.value) {
         return null;
      }
      return {
         invalidPassword: true
      };
   }

   // Validates numbers
   static numberZeroPositiveValidator(number): any {
      if (number.pristine) {
         return null;
      }
      //const NUMBER_REGEXP =/^[0-9]+$/;
      const NUMBER_REGEXP = /^(0|[1-9][0-9]{0,15})$/;
      number.markAsTouched();
      if (NUMBER_REGEXP.test(number.value)) {
         return null;
      }
      return {
         invalidNumber: true
      };
   }
  
      // Validates numbers
      static numberPositiveValidator(number): any {
         if (number.pristine) {
            return null;
         }
         //const NUMBER_REGEXP =/^[0-9]+$/;
         const NUMBER_REGEXP = /^([1-9][0-9]*)$/;
         number.markAsTouched();
         if (NUMBER_REGEXP.test(number.value)) {
            return null;
         }
         return {
            invalidNumber: true
         };
      }


   // Validates numbers
   static numberValidator(number): any {
      if (number.pristine) {
         return null;
      }
      //const NUMBER_REGEXP =/^[0-9]+$/;
      const NUMBER_REGEXP = /^-?[\d.]+(?:e-?\d+)?$/;
      number.markAsTouched();
      if (NUMBER_REGEXP.test(number.value)) {
         return null;
      }
      return {
         invalidNumber: true
      };
   }


   static numberPositiveDecimalValidator(number)
      {
         if (number.pristine) {
            return null;
         }
        

         const NUMBER_REGEXP = /^(?!0$)(?:[1-9]\d*|\d*\.\d+|\d+)$/;
         number.markAsTouched();
         if (NUMBER_REGEXP.test(number.value)) {
            return null;
         }
         return {
            invalidNumber: true
         };
      }
 static numberPositiveDecimalValidatorDontAcceptZero(number)
      {
         if (number.pristine) {
            return null;
         }
        

         const NUMBER_REGEXP = /^(?:[1-9]\d*)(?:\.\d+)?$/;
         number.markAsTouched();
         if (NUMBER_REGEXP.test(number.value)) {
            return null;
         }
         return {
            invalidNumber: true
         };
      }

      static numberDecimalValidator(number)
      {
         if (number.pristine) {
            return null;
         }
        

         const NUMBER_REGEXP = /^(?:[0-9]\d*|\d*\.\d+|\d+)$/;
         number.markAsTouched();
         if (NUMBER_REGEXP.test(number.value)) {
            return null;
         }
         return {
            invalidNumber: true
         };
      }


   // Validates Positive numbers
   static PositivenumberValidator(number): any {
      if (number.pristine) {
         return null;
      }
      //const NUMBER_REGEXP =/^[0-9]+$/;
      const NUMBER_REGEXP = /^[1-9][0-9]*$/;
      number.markAsTouched();
      if (NUMBER_REGEXP.test(number.value)) {
         return null;
      }
      return {
         invalidNumber: true
      };
   }

       static CustomForRestrictPositivenumberValidator(number): any {
      if (number.pristine) {
         return null;
      }
      //const NUMBER_REGEXP =/^[0-9]+$/;
    const NUMBER_REGEXP = /^(?:0|[1-9][0-9]*)(\.[0-9]+)?$/;
      number.markAsTouched();
      if (NUMBER_REGEXP.test(number.value)) {
         return null;
      }
      return {
         invalidNumber: true
      };
   }

   static PositivenumberValidatorwithZero(number): any {
      if (number.pristine) {
         return null;
      }
      //const NUMBER_REGEXP =/^[0-9]+$/;
      const NUMBER_REGEXP = /^[0-9][0-9]*$/;
      number.markAsTouched();
      if (NUMBER_REGEXP.test(number.value)) {
         return null;
      }
      return {
         invalidNumber: true
      };
   }

   static CustomizedForEnterprise_PositivenumberValidatorwithZero(number): any {
      if (number.pristine) {
         return null;
      }
      debugger
      //const NUMBER_REGEXP =/^[0-9]+$/;
      const NUMBER_REGEXP = /^[0-9][0-9]*$/;
      number.markAsTouched();
      if (NUMBER_REGEXP.test(number.value) || number.value=="") {
         return null;
      }
      return {
         invalidNumber: true
      };
   }
   static  CustomizedForEnterprise_PositivenumberValidator(number): any {
      if (number.pristine) {
         return null;
      }
      //const NUMBER_REGEXP =/^[0-9]+$/;
      const NUMBER_REGEXP = /^[1-9][0-9]*$/;
      number.markAsTouched();
      if (NUMBER_REGEXP.test(number.value) || number.value=="") {
         return null;
      }
      return {
         invalidNumber: true
      };
   }
   static CustomizedForEnterprise_ArabicOnlyValidatorWithoutNumbers(ArabicOnly): any {
      if (ArabicOnly.pristine) {
         return null;
      }
      //const ArabicOnly_REGEXPWithoutNums =  /^[\u0600-\u06FF]+(?: [\u0600-\u06FF]+)*$/;
      //const ArabicOnly_REGEXPWithoutNums = /^(?!\s)[/^أء-ي\s ،. ]+$/;
       const ArabicOnly_REGEXPWithoutNums = /^[أء-ي\s]+$/;

      //const ArabicOnly_REGEXPWithoutNums=/^[أء-ي]

      ArabicOnly.markAsTouched();
      if (ArabicOnly_REGEXPWithoutNums.test(ArabicOnly.value) || ArabicOnly.value=="") {
         return null;
      }
      return {
         invalidArabicOnly: true
      };
   }
   static CustomizedForEnterprise_ArabicOnlyValidatorWithSpecialSymbols(ArabicOnlyWithSpecialSymbols): any {
      if (ArabicOnlyWithSpecialSymbols.pristine) {
         return null;
      }
      const ArabicOnlyWithSpecialSymbols_REGEXP = /^[\u0621-\u064A0-9/ \-_()،]+$/;

      ArabicOnlyWithSpecialSymbols.markAsTouched();
      if (ArabicOnlyWithSpecialSymbols_REGEXP.test(ArabicOnlyWithSpecialSymbols.value)|| ArabicOnlyWithSpecialSymbols.value=="") {
         return null;
      }
      return {
         invalidArabicOnlyWithSpecialSymbols: true
      };
   }



   // NationalID numbers
   static NationalIDValidator(number): any {
      if (number.pristine) {
         return null;
      }
      const NUMBER_REGEXP = /^[0-9]{14}$/;

      number.markAsTouched();
      if (NUMBER_REGEXP.test(number.value)) {
         return null;
      }
      return {
         invalidNumber: true
      };
   }

   // Validates US SSN
   static ssnValidator(ssn): any {
      if (ssn.pristine) {
         return null;
      }
      const SSN_REGEXP = /^(?!219-09-9999|078-05-1120)(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4}$/;
      ssn.markAsTouched();
      if (SSN_REGEXP.test(ssn.value)) {
         return null;
      }
      return {
         invalidSsn: true
      };
   }

   // Validation Egyptian SSN
   static egpSsnValidateor(ssn): any {
      if (ssn.pristine) {
         return null;
      }
      const SSN_REGEXP = /^(2|3){1}[0-9]{2}(01|02|03|04|05|06|07|08|09|10|11|12)(01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31)[0-9]{2}[0-9]{4}[0-9]{1}/;
      ssn.markAsTouched();
      if (SSN_REGEXP.test(ssn.value)) {
         return null;
      }
      return {
         invalidEgpSsn: true
      };
   }

   // Validates US phone numbers
   static phoneValidator(number): any {
      if (number.pristine) {
         return null;
      }
      const PHONE_REGEXP = /^(?:0|\(?\+33\)?\s?|0033\s?)[1-79](?:[\.\-\s]?\d\d){4}$/;
      number.markAsTouched();
      if (PHONE_REGEXP.test(number.value)) {
         return null;
      }
      return {
         invalidNumber: true
      };
   }
   static MobileEgyptValidation(mobile: any) {
      if (mobile.pristine) {
        return null;
      }
      const Mobile_REGEXP = /^01[0|1|2|5][0-9]{8}$/;
  
      mobile.markAsTouched();
      if (Mobile_REGEXP.test(mobile.value)) {
        return null;
      }
      return {
        invalidMobile: true,
      };
    }
    
   // Validates zip codes
   static zipCodeValidator(zip): any {
      if (zip.pristine) {
         return null;
      }
      const ZIP_REGEXP = /^[0-9]{5}(?:-[0-9]{4})?$/;
      zip.markAsTouched();
      if (ZIP_REGEXP.test(zip.value)) {
         return null;
      }
      return {
         invalidZip: true
      };
   }

   // Validates Emails
   static EmailsValidator(Emails): any {
      if (Emails.pristine) {
         return null;
      }
      const Emails_REGEXP = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
      Emails.markAsTouched();
      if (Emails_REGEXP.test(Emails.value)) {
         return null;
      }
      return {
         invalidEmails: true
      };
   }
      // Validates Emails Only .eg and .local
      static EmailsValidatorOnlyEgAndLocal(Emails): any {
         if (Emails.pristine) {
            return null;
         }
         const Emails_REGEXP = /^[a-zA-Z]([a-zA-Z0-9-._]*[a-zA-Z0-9])?@(tamweely)+?(\.com.eg|\.local)?$/;
         Emails.markAsTouched();
         if (Emails_REGEXP.test(Emails.value)) {
            return null;
         }
         return {
            invalidEmails: true
         };
      }

   // Validates Password Regular Expression
   static PasswordRegExpValidator(Password): any {
      if (Password.pristine) {
         return null;
      }
      const Password_REGEXP = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}/;
      Password.markAsTouched();
      if (Password_REGEXP.test(Password.value)) {
         return null;
      }
      return {
         invalidPasswordRegExp: true
      };
   }

   // Validates English Only
   static EnglishOnlyValidator(EnglishOnly): any {
      if (EnglishOnly.pristine) {
         return null;
      }
      const EnglishOnly_REGEXP = /^[a-zA-_Z\s \0-9z]+$/;
      EnglishOnly.markAsTouched();
      if (EnglishOnly_REGEXP.test(EnglishOnly.value)) {
         return null;
      }
      return {
         invalidEnglishOnly: true
      };
   }

   // Validates English with Numbers and Special Symbols only (for Book_Definitions)
   static EnglishOnlyValidatorWithSpecialSymbols(EnglishOnlyWithSpecialSymbols): any {
      if (EnglishOnlyWithSpecialSymbols.pristine) {
         return null;
      }
      const EnglishOnlyWithSpecialSymbols_REGEXP = /^[a-zA-Z 0-9z/ \-_()،]+$/;
      EnglishOnlyWithSpecialSymbols.markAsTouched();
      if (EnglishOnlyWithSpecialSymbols_REGEXP.test(EnglishOnlyWithSpecialSymbols.value)) {
         return null;
      }
      return {
         invalidEnglishOnlyWithSpecialSymbols: true
      };
   }

   // Letters only -doesn't accept space only-
   static EnglishOnlyValidatorWithoutNumbers(EnglishOnly): any {
      if (EnglishOnly.pristine) {
         return null;
      }
     // const EnglishOnly_REGEXPWithoutNums = /^[^\W][A-Za-z\s]+$/;
     //edit by mostafa
      const EnglishOnly_REGEXPWithoutNums = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;

      // const EnglishOnly_REGEXPWithoutNums = /^[^-\s][A-Za-z]+$/;
      // const EnglishOnly_REGEXPWithoutNums = /^([a-zA-Z]+\s?$|[^\s]+|[^0-9])/;
      // ^(.?$|[^m].+|m[^y].*)
      EnglishOnly.markAsTouched();
      if (EnglishOnly_REGEXPWithoutNums.test(EnglishOnly.value)) {
         return null;
      }
      return {
         invalidEnglishOnly: true
      };
   }

   // Validates Arabic Only
   static ArabicOnlyValidator(ArabicOnly): any {
      if (ArabicOnly.pristine) {
         return null;
      }
      //const ArabicOnly_REGEXP = /^[\u0621-\u064A\u0660-\u0669-\0-9]+$/;
      //const ArabicOnly_REGEXP = /[\u0600-\u06FF\u0750-\u077F-\0-9]+$/;
      const ArabicOnly_REGEXP = /^[ ؟ أء-ي\s \0-9_،]+$/;
        // const ArabicOnly_REGEXP = /^[أء-ي\s -]+$/;
      
      ArabicOnly.markAsTouched();
      if (ArabicOnly_REGEXP.test(ArabicOnly.value)) {
         return null;
      }
      return {
         invalidArabicOnly: true
      };
   }
    // Validates Arabic Only
    static OnlyArabicValidator(ArabicOnly): any {
      if (ArabicOnly.pristine) {
         return null;
      }
      //const ArabicOnly_REGEXP = /^[\u0621-\u064A\u0660-\u0669-\0-9]+$/;
      //const ArabicOnly_REGEXP = /[\u0600-\u06FF\u0750-\u077F-\0-9]+$/;
      const ArabicOnly_REGEXP = /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]+(?:\s[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]+)*$/;
        // const ArabicOnly_REGEXP = /^[أء-ي\s -]+$/;
      
      ArabicOnly.markAsTouched();
      if (ArabicOnly_REGEXP.test(ArabicOnly.value)) {
         return null;
      }
      return {
         invalidArabicOnly: true
      };
   }
    // Validates Arabic Only with numbers and ()
    static OnlyArabic_Withnumbers_AndParenthesesValidator(ArabicOnly): any {
      if (ArabicOnly.pristine) {
         return null;
      }
      const ArabicOnly_REGEXP = /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\d()]+(?:\s[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\d()]+)*$/;    
      ArabicOnly.markAsTouched();
      if (ArabicOnly_REGEXP.test(ArabicOnly.value)) {
         return null;
      }
      return {
         invalidArabicOnly: true
      };
   }
   



// /^[\u0041-\u005A\u0061-\u007A\u0030-\u0039\u005f \u002D\u0028\u0029]+$/u




   // Validates Arabic Only with Numbers and some Special Char like['(, ), -, _' ]
   static ArabicOnlywithNumUnderScohyphenparenthesis(ArabicOnly): any {
      if (ArabicOnly.pristine) {
         return null;
      }
          const ArabicOnly_REGEXP = /^[\u0621-\u064A\u0660-\u0669\u0030-\u0039\u005f \u002D\u0028\u0029]+$/ 
      ArabicOnly.markAsTouched();
      if (ArabicOnly_REGEXP.test(ArabicOnly.value)) {
         return null;
      }
      return {
         invalidArabicOnly: true
      };
   }

      // Validates Arabic Only with Numbers and some Special Char like['(, ), -, _' ]
      static EnglishOnlywithNumUnderScohyphenparenthesis(EnglishOnly): any {
         if (EnglishOnly.pristine) {
            return null;
         }
             const ArabicOnly_REGEXP =  /^[\u0041-\u005A\u0061-\u007A\u0030-\u0039\u005f \u002D\u0028\u0029]+$/;
             EnglishOnly.markAsTouched();
         if (ArabicOnly_REGEXP.test(EnglishOnly.value)) {
            return null;
         }
         return {
            invalidEnglishOnly: true
         };
      }



      static ArabicOnlywithNumUnderScohyphenparenthesisAtLest3CHar(ArabicOnly): any {
         if (ArabicOnly.pristine) {
            return null;
         }
             const ArabicOnly_REGEXP = /^([\u0621-\u064A]{2})+[\u0621-\u064A\u0660-\u0669\u0030-\u0039\u005f \u002D\u0028\u0029]+$/ 
         ArabicOnly.markAsTouched();
         if (ArabicOnly_REGEXP.test(ArabicOnly.value)) {
            return null;
         }
         return {
            invalidArabicOnly: true
         };
      }
   
         // Validates Arabic Only with Numbers and some Special Char like['(, ), -, _' ]
         static EnglishOnlywithNumUnderScohyphenparenthesisAtLest3CHar(EnglishOnly): any {
            if (EnglishOnly.pristine) {
               return null;
            }
                const ArabicOnly_REGEXP =  /^([\u0041-\u005A\u0061-\u007A]{2})+[\u0041-\u005A\u0061-\u007A\u0030-\u0039\u005f \u002D\u0028\u0029]+$/;
                EnglishOnly.markAsTouched();
            if (ArabicOnly_REGEXP.test(EnglishOnly.value)) {
               return null;
            }
            return {
               invalidEnglishOnly: true
            };
         }














      // Validates Arabic Only
      static ArabicOnlywithNumberandUnderScore(ArabicOnly): any {
         if (ArabicOnly.pristine) {
            return null;
         }
         //const ArabicOnly_REGEXP = /^[\u0621-\u064A\u0660-\u0669-\0-9]+$/;
         //const ArabicOnly_REGEXP = /[\u0600-\u06FF\u0750-\u077F-\0-9]+$/;
         // const ArabicOnly_REGEXP = /^[ ؟ أء-ي\s \0-9_،]+$/;
           // const ArabicOnly_REGEXP = /^[أء-ي\s -]+$/;
             const ArabicOnly_REGEXP =  /^[\u0621-\u064A\u0660-\u0669\u0030-\u0039\u005f ]+$/;
   
         ArabicOnly.markAsTouched();
         if (ArabicOnly_REGEXP.test(ArabicOnly.value)) {
            return null;
         }
         return {
            invalidArabicOnly: true
         };
      }


          // Validates Arabic Only
          static EnglishOnlywithNumberandUnderScore(EnglishOnly): any {
            if (EnglishOnly.pristine) {
               return null;
            }
            //const ArabicOnly_REGEXP = /^[\u0621-\u064A\u0660-\u0669-\0-9]+$/;
            //const ArabicOnly_REGEXP = /[\u0600-\u06FF\u0750-\u077F-\0-9]+$/;
            // const ArabicOnly_REGEXP = /^[ ؟ أء-ي\s \0-9_،]+$/;
              // const ArabicOnly_REGEXP = /^[أء-ي\s -]+$/;
                const ArabicOnly_REGEXP =  /^[\u0041-\u005A\u0061-\u007A\u0030-\u0039\u005f ]+$/;
      
                EnglishOnly.markAsTouched();
            if (ArabicOnly_REGEXP.test(EnglishOnly.value)) {
               return null;
            }
            return {
               invalidEnglishOnly: true
            };
         }

         


   // Validates Arabic Only with Numbers and Special Symbols only (for Book_Definitions)
   static ArabicOnlyValidatorWithSpecialSymbols(ArabicOnlyWithSpecialSymbols): any {
      if (ArabicOnlyWithSpecialSymbols.pristine) {
         return null;
      }
      const ArabicOnlyWithSpecialSymbols_REGEXP = /^[\u0621-\u064A0-9/ \-_()،]+$/;

      ArabicOnlyWithSpecialSymbols.markAsTouched();
      if (ArabicOnlyWithSpecialSymbols_REGEXP.test(ArabicOnlyWithSpecialSymbols.value)) {
         return null;
      }
      return {
         invalidArabicOnlyWithSpecialSymbols: true
      };
   }


// Letters Arabic And - _
static ArabicOnlyWithoutNumbers(ArabicOnly): any {
   if (ArabicOnly.pristine) {
      return null;
   }
   //const ArabicOnly_REGEXPWithoutNums =  /^[\u0600-\u06FF]+(?: [\u0600-\u06FF]+)*$/;
   //const ArabicOnly_REGEXPWithoutNums = /^(?!\s)[/^أء-ي\s ،. ]+$/;
    const ArabicOnly_REGEXPWithoutNums = /^[ أء-ي-_()\s]+$/;

   //const ArabicOnly_REGEXPWithoutNums=/^[أء-ي]

   ArabicOnly.markAsTouched();
   if (ArabicOnly_REGEXPWithoutNums.test(ArabicOnly.value)) {
      return null;
   }
   return {
      invalidArabicOnly: true
   };
}

// Letters English And with numbers and ()
static EnglishOnlyWith_AndParenthesesNumbers(EnglishOnlyWithSpecialSymbols): any {
   if (EnglishOnlyWithSpecialSymbols.pristine) {
      return null;
   }
   const EnglishOnlyWithSpecialSymbols_REGEXP = /^[a-zA-Z\d()]+(?: [a-zA-Z\d()]+)*$/;
   EnglishOnlyWithSpecialSymbols.markAsTouched();
   if (EnglishOnlyWithSpecialSymbols_REGEXP.test(EnglishOnlyWithSpecialSymbols.value)) {
      return null;
   }
   return {
      invalidEnglishOnly: true
   };
}

// Letters English And - _
static EnglishOnlyWithoutNumbers(EnglishOnlyWithSpecialSymbols): any {
   if (EnglishOnlyWithSpecialSymbols.pristine) {
      return null;
   }
   const EnglishOnlyWithSpecialSymbols_REGEXP = /^[a-zA-Zz \- _ ()]+$/;
   EnglishOnlyWithSpecialSymbols.markAsTouched();
   if (EnglishOnlyWithSpecialSymbols_REGEXP.test(EnglishOnlyWithSpecialSymbols.value)) {
      return null;
   }
   return {
      invalidEnglishOnly: true
   };
}
   // Letters only -doesn't accept space only-
   static ArabicOnlyValidatorWithoutNumbers(ArabicOnly): any {
      if (ArabicOnly.pristine) {
         return null;
      }
      //const ArabicOnly_REGEXPWithoutNums =  /^[\u0600-\u06FF]+(?: [\u0600-\u06FF]+)*$/;
      //const ArabicOnly_REGEXPWithoutNums = /^(?!\s)[/^أء-ي\s ،. ]+$/;
       const ArabicOnly_REGEXPWithoutNums = /^[أء-ي\s]+$/;

      //const ArabicOnly_REGEXPWithoutNums=/^[أء-ي]

      ArabicOnly.markAsTouched();
      if (ArabicOnly_REGEXPWithoutNums.test(ArabicOnly.value)) {
         return null;
      }
      return {
         invalidArabicOnly: true
      };
   }

   // Validates IP Address
   static IPAddressValidator(IPAddress): any {
      if (IPAddress.pristine) {
         return null;
      }
      const IPAddress_REGEXP = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

      IPAddress.markAsTouched();
      if (IPAddress_REGEXP.test(IPAddress.value) && IPAddress.value != "0.0.0.0") {
         return null;
      }
      return {
         invalidIPAddress: true
      };
   }

   // Validates Strings
   static stringValidator(number): any {
      if (number.pristine) {
         return null;
      }
      const NUMBER_REGEXP = /^-?[\d.]+(?:e-?\d+)?$/;
      number.markAsTouched();
      if (!NUMBER_REGEXP.test(number.value)) {
         return null;
      }
      return {
         invalidString: true
      };
   }


   static FullEGYNationalIDValidation(EgyNationalID): any {
      if (EgyNationalID.pristine) {
         return null;
      }
      const NUMBER_REGEXP = /^(2|3){1}[0-9]{2}(01|02|03|04|05|06|07|08|09|10|11|12)(01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31)[0-9]{2}[0-9]{4}[0-9]{1}/;
      EgyNationalID.markAsTouched();
      if (NUMBER_REGEXP.test(EgyNationalID.value)) {
         return null;
      }
      return {
         invalidEgyNationalID: true
      };
   }

   static DecimalNumberGreaterZero(number):any{
      if (number.pristine) {
         return null;
      }
     
      const NUMBER_REGEXP =/^([0-9]+\.[0-9]+$)|(^[1-9][0-9]*$)/
      
      number.markAsTouched();
      if (NUMBER_REGEXP.test(number.value)) {
         return null;
      }
      return {
         invalidDecimalNumber: true
      };
   }

   static DecimalNumber(number):any{
      if (number.pristine) {
         return null;
      }
     
      const NUMBER_REGEXP =/^([0-9]+\.[0-9]+$)|(^[0-9]*$)/
      
      number.markAsTouched();
      if (NUMBER_REGEXP.test(number.value)) {
         return null;
      }
      return {
         invalidDecimalNumber: true
      };
   }
   // English Only With number Positive
   static EnglishOnlyWithPositiveNumbersValidator(EnglishOnly): any {
      if (EnglishOnly.pristine) {
         return null;
      }
      const EnglishOnly_REGEXP = /^[a-zA-Z0-9]+(?: [a-zA-Z0-9]+)*$/;
      EnglishOnly.markAsTouched();
      if (EnglishOnly_REGEXP.test(EnglishOnly.value)) {
         return null;
      }
      return {
         invalidEnglishWithPositiveNumbersOnly: true
      };
   }
   
   static parseDateString(dateStr: string): Date | null {
      if (!dateStr) return null;
      dateStr = dateStr.trim().replace(/^"+|"+$/g, '');
      const match = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})$/);
      if (!match) return null;
      const [_, year, month, day] = match.map(Number);
      return new Date(Date.UTC(year, month-1, day));
    }
   


    static CustomparseDateString(dateStr: string): string | null {
  if (!dateStr) return null;

  // Remove surrounding quotes
  dateStr = dateStr.trim().replace(/^"+|"+$/g, '');

  // Match only YYYY-MM or YYYY-MM-DD
  const match = dateStr.match(/^(\d{4})-(\d{2})(?:-(\d{2}))?$/);
  if (!match) return null;

  const year = match[1];
  const month = match[2];

  return `${year}-${month}`;
}
}