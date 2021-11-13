// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('phone numbers valid', () => {
    const phone1 = functions.isPhoneNumber('(818) 818-8188');
    expect(phone1).toBe(true);
});

test('phone numbers valid', () => {
    const phone2 = functions.isPhoneNumber('000-000-0000');
    expect(phone2).toBe(true);
});

test('phone numbers invalid', () => {
    const phone1 = functions.isPhoneNumber('0101000110');

    expect(phone1).not.toBe(true);
});

test('phone numbers invalid', () => {
    const phone2 = functions.isPhoneNumber('(818)-(818)-(8188)');

    expect(phone2).not.toBe(true);
});

test('emails valid', () => {
    const email1 = functions.isEmail('test@test.com');

    expect(email1).toBe(true);
});

test('emails valid', () => {
    const email2 = functions.isEmail('12345@test.co');

    expect(email2).toBe(true);
});

test('emails invalid', () => {
    const email1 = functions.isEmail('test@12test.com');

    expect(email1).not.toBe(true);
});

test('emails invalid', () => {
    const email2 = functions.isEmail('12345@test.comm');

    expect(email2).not.toBe(true);
});

test('strong passwords valid', () => {
    const pass1 = functions.isStrongPassword('test1');

    expect(pass1).toBe(true);
});

test('strong passwords valid', () => {
    const pass2 = functions.isStrongPassword('test_test_test1');

    expect(pass2).toBe(true);
});

test('strong passwords invalid', () => {
    const pass1 = functions.isStrongPassword('1test');

    expect(pass1).not.toBe(true);
});

test('strong passwords invalid', () => {
    const pass2 = functions.isStrongPassword('test+test+test1');

    expect(pass2).not.toBe(true);
});

test('date valid', () => {
    const date1 = functions.isDate('12/12/1222');

    expect(date1).toBe(true);
});

test('date valid', () => {
    const date2 = functions.isDate('2/2/1222');

    expect(date2).toBe(true);
});

test('date invalid', () => {
    const date1 = functions.isDate('12/12/12222');

    expect(date1).not.toBe(true);
});

test('date invalid', () => {
    const date2 = functions.isDate('222/22/1222');

    expect(date2).not.toBe(true);
});

test('hex valid', () => {
    const hex1 = functions.isHexColor('fff');

    expect(hex1).toBe(true);
});

test('hex valid', () => {
    const hex2 = functions.isHexColor('#AAAAAA');

    expect(hex2).toBe(true);
});

test('hex invalid', () => {
    const hex1 = functions.isHexColor('ffff');

    expect(hex1).not.toBe(true);
});

test('hex invalid', () => {
    const hex2 = functions.isHexColor('#AAAAA');

    expect(hex2).not.toBe(true);
});

