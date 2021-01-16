import { getRoute } from '../helpers/adminHelpers';
import * as appHelpers from '../helpers/appHelpers';
import * as authHelpers from '../helpers/authHelpers';
import * as collectionHelpers from '../helpers/collectionHelpers';
import collectionData from './data/collections.json';
import { sortConsultations } from '../helpers/consultationHelpers';
import * as productHelpers from '../helpers/productHelpers';

const yesterDay = new Date().setDate(new Date().getDate() - 1);
const theOtherDay = new Date().setDate(new Date().getDate() - 2);
const today = + new Date();


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
// const testData = [
//   {
//     name: "yesterday",
//     createdAt: yesterDay
//   },
//   {
//     name: "today",
//     createdAt: today
//   },
//   {
//     name: "theOtherDay",
//     createdAt: theOtherDay
//   }
// ];
// const sortedData = [
//   {
//     name: "theOtherDay",
//     createdAt: theOtherDay
//   },
//   {
//     name: "yesterday",
//     createdAt: yesterDay
//   },
//   {
//     name: "today",
//     createdAt: today
//   }
// ];
//     expect(appHelpers.ascSort(testData)).toMatchObject(sortedData);
//   });

// });

// describe('AuthHelpers', () => {
//   describe('Login fields check', () => {
//     it('should return error message if empty field was passed', () => {
//       expect(authHelpers.loginFieldAreBad("", "email")).toBe('Field must not be empty');
//     });

//     it('should return error message if email field was invalid', () => {
//       expect(authHelpers.loginFieldAreBad("someuser", "email")).toBe("Email is badly formatted");
//     });

//     it('should return error message if password is badly formatted', () => {
//       expect(authHelpers.loginFieldAreBad("test", "password")).toBe("Password must be between 6 and 32 characters");
//     });
//   });

//   describe('areAnyFieldsInUserDataFormAreEmpty', () => {
//     const sampleData = {
//       email: "vinsmoke.sanji@email.com",
//       password: "testpassword",
//       fullName: "Vinsmoke,Sanji",
//       phone: "0488888888",
//       address1: "42 North Blue",
//       suburb: "Grand Line",
//       state: "QLD",
//       postcode: "4009"
//     };

//     const wrongData = {
//       email: "brave.usopp@email.com",
//       password: "test",
//       fullName: "Brave,Usopp",
//       phone: "0488888888",
//       address1: "43 North Blue",
//       suburb: "Grand Line",
//       state: "QLD",
//       postcode: "4009"
//     };

//     it('should return an object with error messages if invalid field found.', () => {
//       expect(authHelpers.areAnyFieldsInUserDataFormAreEmpty(wrongData)).toBeTruthy();
//     });
//     it('shoud return false if all fields are valid', () => {
//       expect(authHelpers.areAnyFieldsInUserDataFormAreEmpty(sampleData)).toBeFalsy();
//     });
//   });


// });



// describe('CollectionHelpers', () => {
//   const firstCol = collectionData[0];
//   it('should get one collection with the given ID', () => {
//     const collectionId = "5ff68e058b458ac89102e2ca";
//     expect(collectionHelpers.getOneCollectionFromState(collectionData, collectionId)).toBe(collectionData[0]);
//   });

//   it('should NOT return errors when there are no duplicates in Collection', () => {
//     expect(collectionHelpers.filterProductsInCollection(firstCol).error).toBe(false);
//   });

//   it('should return FALSE when user is not removing a product on edit', () => {
//     expect(collectionHelpers.checkIfUserIsRemovingAProduct(firstCol)).toBe(false);
//   });

//   it('should return warning if NO product of certain category found', () => {
//     const emptyProductArr = [];
//     expect(collectionHelpers.checkIfProductsExistInCollection(emptyProductArr, "Track")).toBe("You have no Track products, are you sure you want to continue?");
//   });

//   it('should return content string depending on number of items in array', () => {
//     const accessories = firstCol.accessory;
//     expect(collectionHelpers.buildContentString(accessories, 'Accessory')).toBe("3 Accessories");
//   });

//   it('should not include empty collection', () => {
//     const emptyCol = { name: "Empty Collection", track: [], accessory: [], fabric: [] };
//     const testCol = [...collectionData, emptyCol];
//     expect(collectionHelpers.filterOutEmptyCollections(testCol)).toEqual(expect.not.objectContaining(emptyCol));
//   });
// });

// describe('ConsultationHelper', () => {
//   const testData = [
//     {
//       name: "yesterday",
//       createdAt: yesterDay,
//       isProcessed: true
//     },
//     {
//       name: "today",
//       createdAt: today,
//       isProcessed: false
//     },
//     {
//       name: "theOtherDay",
//       createdAt: theOtherDay,
//       isProcessed: false
//     }
//   ];
//   const sortedData = [
//     {
//       name: "theOtherDay",
//       createdAt: theOtherDay,
//       isProcessed: false
//     },
//     {
//       name: "today",
//       createdAt: today,
//       isProcessed: false
//     },
//     {
//       name: "yesterday",
//       createdAt: yesterDay,
//       isProcessed: true
//     }
//   ];
//   it('should sort data by date and then by if processed', () => {
//     expect(sortConsultations(testData)).toMatchObject(sortedData);
//   });

// });

describe('ProductHelpers', () => {
  const testProducts = [
    {
      name: "First Product",
      price: 200,
      _id: "0001"
    },
    {
      name: "Second Product",
      price: 300,
      _id: "0002"
    },
    {
      name: "Third Product",
      price: 400,
      _id: "0003"
    }
  ];

  const firstProd = testProducts[0];

  describe('Sort Products', () => {
    const lowestP = testProducts[0];
    const highestP = testProducts[2];
    const firstLetP = testProducts[0];
    const lastLetP = testProducts[2];

    it('should sort by price - low to high', () => {
      expect(productHelpers.sortProducts(testProducts, "Price: Low to High")[0]).toBe(lowestP);
    });
    it('should sort by price - high to low', () => {
      expect(productHelpers.sortProducts(testProducts, "Price: High to Low")[0]).toBe(highestP);
    });
    it('should sort by name - A to Z', () => {
      expect(productHelpers.sortProducts(testProducts, "Name: A to Z")[0]).toBe(firstLetP);
    });
    it('should sort by name - Z to A', () => {
      expect(productHelpers.sortProducts(testProducts, "Name: Z to A")[0]).toBe(lastLetP);
    });
  });

  it('should return search keyword of a Product', () => {
    expect(productHelpers.searchProducts(testProducts, "First")[0]).toBe(firstProd);
  });

  it('should return one product with matching _id', () => {
    expect(productHelpers.getOneProductFromState(testProducts, "0001")).toBe(firstProd);
  });

  it('should return TRUE if product does have an empty field', () => {
    firstProd.price = "";
    expect(productHelpers.checkIfAnyFieldsEmptyOnProductObject(firstProd)).toBe(true);
  });
});