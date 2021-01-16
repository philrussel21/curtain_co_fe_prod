import { getRoute } from '../helpers/adminHelpers';
import * as appHelpers from '../helpers/appHelpers';

describe('AdminHelpers', () => {
  it('should return formatted url as an admin', () => {
    expect(getRoute('products/add')).toBe('/account/products/add');
  });
});


describe('AppHelpers', () => {
  it('should capitalize string', () => {
    expect(appHelpers.capitalize('hello')).toBe('Hello');
  });

  it('should return true if Object is empty', () => {
    const empObj = {};
    expect(appHelpers.isEmpty(empObj)).toBe(true);
  });

  it('should return false if photo is not assigned', () => {
    const photo = {};
    expect(appHelpers.isPhotoPresent(photo)).toBeFalsy();
  });

  it('should translate server stamped date to certain format', () => {
    const unixTime = 1610773240464;
    expect(appHelpers.displayShortDate(unixTime)).toBe('16.1.2021');
  });

  it('should display Phone Number in certain format', () => {
    const phoneNum = '0411223344';
    expect(appHelpers.displayPhoneNumber(phoneNum)).toBe('0411 223 344');
  });

  it('should sort data in ascending order', () => {
    const yesterDay = new Date().setDate(new Date().getDate() - 1);
    const theOtherDay = new Date().setDate(new Date().getDate() - 2);
    const today = + new Date();
    const testData = [
      {
        name: "yesterday",
        createdAt: yesterDay
      },
      {
        name: "today",
        createdAt: today
      },
      {
        name: "theOtherDay",
        createdAt: theOtherDay
      }
    ];
    const sortedData = [
      {
        name: "theOtherDay",
        createdAt: theOtherDay
      },
      {
        name: "yesterday",
        createdAt: yesterDay
      },
      {
        name: "today",
        createdAt: today
      }
    ];
    expect(appHelpers.ascSort(testData)).toMatchObject(sortedData);
  });

});

