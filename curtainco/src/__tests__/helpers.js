import { getRoute } from '../helpers/adminHelpers';
import * as appHelpers from '../helpers/appHelpers';
import * as authHelpers from '../helpers/authHelpers';

// describe('AdminHelpers', () => {
//   it('should return formatted url as an admin', () => {
//     expect(getRoute('products/add')).toBe('/account/products/add');
//   });
// });


// describe('AppHelpers', () => {
//   it('should capitalize string', () => {
//     expect(appHelpers.capitalize('hello')).toBe('Hello');
//   });

//   it('should return true if Object is empty', () => {
//     const empObj = {};
//     expect(appHelpers.isEmpty(empObj)).toBe(true);
//   });

//   it('should return false if photo is not assigned', () => {
//     const photo = {};
//     expect(appHelpers.isPhotoPresent(photo)).toBeFalsy();
//   });

//   it('should translate server stamped date to certain format', () => {
//     const unixTime = 1610773240464;
//     expect(appHelpers.displayShortDate(unixTime)).toBe('16.1.2021');
//   });

//   it('should display Phone Number in certain format', () => {
//     const phoneNum = '0411223344';
//     expect(appHelpers.displayPhoneNumber(phoneNum)).toBe('0411 223 344');
//   });

//   it('should sort data in ascending order', () => {
//     const yesterDay = new Date().setDate(new Date().getDate() - 1);
//     const theOtherDay = new Date().setDate(new Date().getDate() - 2);
//     const today = + new Date();
//     const testData = [
//       {
//         name: "yesterday",
//         createdAt: yesterDay
//       },
//       {
//         name: "today",
//         createdAt: today
//       },
//       {
//         name: "theOtherDay",
//         createdAt: theOtherDay
//       }
//     ];
//     const sortedData = [
//       {
//         name: "theOtherDay",
//         createdAt: theOtherDay
//       },
//       {
//         name: "yesterday",
//         createdAt: yesterDay
//       },
//       {
//         name: "today",
//         createdAt: today
//       }
//     ];
//     expect(appHelpers.ascSort(testData)).toMatchObject(sortedData);
//   });

// });

describe('AuthHelpers', () => {
  describe('Login fields check', () => {
    it('should return error message if empty field was passed', () => {
      expect(authHelpers.loginFieldAreBad("", "email")).toBe('Field must not be empty');
    });

    it('should return error message if email field was invalid', () => {
      expect(authHelpers.loginFieldAreBad("someuser", "email")).toBe("Email is badly formatted");
    });

    it('should return error message if password is badly formatted', () => {
      expect(authHelpers.loginFieldAreBad("test", "password")).toBe("Password must be between 6 and 32 characters");
    });
  });

  describe('areAnyFieldsInUserDataFormAreEmpty', () => {
    const sampleData = {
      email: "vinsmoke.sanji@email.com",
      password: "testpassword",
      fullName: "Vinsmoke,Sanji",
      phone: "0488888888",
      address1: "42 North Blue",
      suburb: "Grand Line",
      state: "QLD",
      postcode: "4009"
    };

    const wrongData = {
      email: "brave.usopp@email.com",
      password: "test",
      fullName: "Brave,Usopp",
      phone: "0488888888",
      address1: "43 North Blue",
      suburb: "Grand Line",
      state: "QLD",
      postcode: "4009"
    };

    it('should return an object with error messages if invalid field found.', () => {
      expect(authHelpers.areAnyFieldsInUserDataFormAreEmpty(wrongData)).toBeTruthy();
    });
    it('shoud return false if all fields are valid', () => {
      expect(authHelpers.areAnyFieldsInUserDataFormAreEmpty(sampleData)).toBeFalsy();
    });
  });


});


