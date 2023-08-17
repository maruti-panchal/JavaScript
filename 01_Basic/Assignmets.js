// # Challenge 1 
// Display only 280 characters of a string like the one is used in twitter
let myTweet="ybvuBVUIH HUIABuvnjbnvui h buibaibnkNKLNU UBHABSHDBCHBUI UBUBUibioin jbhjbdsiuuhuisabjcbjB JJBHDSBHHB BAB BJB BKZBAVBSVBKbbhbbdjb bjsbvbsnv bjhBBABCBSAVBSBbjvjb jbb jbsbnlsnvvkknvkjb  bskbJBBSBJNVSNVSJKVBJSBVSBSB BSBHSBBSKDSDBJKV BJSHBHSDBKDS BJSBKSJ KBNSBKJBIUUGDEWUIFGVH BIALIABV BAIBAIBN JSLANVIEAA lndffibabdbbb baiosheubfeb ilab bsakns jkbs fvn kicbhbsf fjkb vksd vnfd kxks b inv ssf vilzdb sznlkjbdnb  fkxcbf e vikhdihfjba  vikxchiuhseub kxccbff s";
console.log(myTweet.length);
let actualTweet=myTweet.slice(0,280);
console.log(actualTweet);
console.log(actualTweet.length);

// # Challenge 2
//return the Unicode of the last Character in a string.
let str="Hello World";

let unicode_char=str.length-1;
console.log(str.charCodeAt(unicode_char)); 