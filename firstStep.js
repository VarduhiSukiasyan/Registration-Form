///////////Step 1/3 //////
let countryData = [{
    abbrev: 'AF',
    name: 'Afghanistan',
    postal: /[0-9]{4}/g,
}, {
    abbrev: 'AL',
    name: 'Albania',
    postal: /(120|122)[0-9]{2}/g,
}, {
    abbrev: 'DZ',
    name: 'Algeria',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'AS',
    name: 'American Samoa',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'AD',
    name: 'Andorra',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'AO',
    name: 'Angola',
}, {
    abbrev: 'AI',
    name: 'Anguilla',
    postal: /AI-2640/g,
}, {
    abbrev: 'AR',
    name: 'Argentina',
    postal: /[A-Z]{1}[0-9]{4}[A-Z]{3}/g,
}, {
    abbrev: 'AM',
    name: 'Armenia',
    postal: /[0-9]{4}/g,
}, {
    abbrev: 'AU',
    name: 'Australia',
    postal: /[0-9]{4}/g,
}, {
    abbrev: 'AT',
    name: 'Austria',
    postal: /[0-9]{4}/g,
}, {
    abbrev: 'AZ',
    name: 'Azerbaijan',
    postal: /[0-9]{4}/g,
}, {
    abbrev: 'BD',
    name: 'Bangladesh',
    postal: /[0-9]{4}/g,
}, {
    abbrev: 'BB',
    name: 'Barbados',
    postal: /BB[0-9]{5}/g,
}, {
    abbrev: 'BY',
    name: 'Belarus',
    postal: /[0-9]{6}/g,
}, {
    abbrev: 'BE',
    name: 'Belgium',
    postal: /[0-9]{4}/g,
}, {
    abbrev: 'BJ',
    name: 'Benin',
}, {
    abbrev: 'BM',
    name: 'Bermuda',
    postal: /[A-Z]{2}[0-9]{2}/g,
}, {
    abbrev: 'BT',
    name: 'Bhutan',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'BA',
    name: 'Bosnia and Herzegovina',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'BR',
    name: 'Brazil',
    postal: /[0-9]{5}-[0-9]{3}/g,
}, {
    abbrev: 'BN',
    name: 'Brunei',
    postal: /[A-Z]{2}[0-9]{4}/g,
}, {
    abbrev: 'BG',
    name: 'Bulgaria',
    postal: /[0-9]{4}/g,
}, {
    abbrev: 'KH',
    name: 'Cambodia',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'CA',
    name: 'Canada',
    postal: /[A-Z][0-9][A-Z] ?[0-9][A-Z][0-9]/g,
}, {
    abbrev: 'CI',
    name: 'Canary Islands',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'CV',
    name: 'Cape Verde',
    postal: /[0-9]{4}/g,
}, {
    abbrev: 'KY',
    name: 'Cayman Islands',
    postal: /[A-Z]{2}[0-9]-[0-9]{4}/g,
}, {
    abbrev: 'TD',
    name: 'Chad',
}, {
    abbrev: 'CI',
    name: 'Channel Islands',
    postal: /[A-Z]{2}[0-9]{2}/g,
}, {
    abbrev: 'CL',
    name: 'Chile',
    postal: /[0-9]{7}/g,
}, {
    abbrev: 'CN',
    name: "China, People's Republic",
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'CO',
    name: 'Colombia',
    postal: /[0-9]{6}/g,
}, {
    abbrev: 'CR',
    name: 'Costa Rica',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'HR',
    name: 'Croatia',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'CU',
    name: 'Cuba',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'CY',
    name: 'Cyprus',
    postal: /[0-9]{4}/g,
}, {
    abbrev: 'CZ',
    name: 'Czech Republic',
    postal: /[0-9]{3} [0-9]{2}/g,
}, {
    abbrev: 'DK',
    name: 'Denmark',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'DO',
    name: 'Dominican Republic',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'EC',
    name: 'Ecuador',
    postal: /[0-9]{6}/g,
}, {
    abbrev: 'EG',
    name: 'Egypt',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'SV',
    name: 'El Salvador',
    postal: /[0-9]{4}/g,
}, {
    abbrev: 'EE',
    name: 'Estonia',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'ET',
    name: 'Ethiopia',
    postal: /[0-9]{4}/g,
}, {
    abbrev: 'FK',
    name: 'Falkland Islands',
    postal: /FIQQ 1ZZ/g,
}, {
    abbrev: 'FO',
    name: 'Faroe Islands',
    postal: /[0-9]{3}/g,
}, {
    abbrev: 'FI',
    name: 'Finland',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'FR',
    name: 'France',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'PF',
    name: 'French Polynesia',
    postal: /987[0-9]{2}/g,
    range: ['98700', '98790'],
}, {
    abbrev: 'DE',
    name: 'Germany',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'GI',
    name: 'Gibraltar',
    postal: /GX11 1AA/g,
}, {
    abbrev: 'GR',
    name: 'Greece',
    postal: /[0-9]{3} [0-9]{2}/g,
}, {
    abbrev: 'GL',
    name: 'Greenland',
    postal: /[0-9]{4}/g,
}, {
    abbrev: 'GP',
    name: 'Guadeloupe',
    postal: /971[0-9]{2}/g,
    range: ['97100', '97190'],
}, {
    abbrev: 'GU',
    name: 'Guam',
    // US postal code
    // https://stackoverflow.com/questions/2577236/regex-for-zip-code
    postal: /^\d{5}(?:[-\s]\d{4})?$/g,
    range: ['96910', '96932'],
}, {
    abbrev: 'GT',
    name: 'Guatemala',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'GG',
    name: 'Guernsey',
    // UK postal code
    // https://stackoverflow.com/questions/164979/regex-for-matching-uk-postcodes
    postal: /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/g,
}, {
    abbrev: 'GW',
    name: 'Guinea-Bissau',
    postal: /[0-9]{4}/g,

}, {
    abbrev: 'GN',
    name: 'Guinea Republic',
    postal: /[0-9]{3}/g,
}, {
    abbrev: 'GF',
    name: 'Guyana (French)',
    postal: /973[0-9]{2}/g,
    range: ['97300', '97390'],
}, {
    abbrev: 'HT',
    name: 'Haiti',
    postal: /[0-9]{4}/g,
}, {
    abbrev: 'HN',
    name: 'Honduras',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'HU',
    name: 'Hungary',
    postal: /[0-9]{4}/g,
}, {
    abbrev: 'IS',
    name: 'Iceland',
    postal: /[0-9]{3}/g,
}, {
    abbrev: 'IN',
    name: 'India',
    // https://stackoverflow.com/questions/33865525/indian-pincode-validation-regex-only-six-digits-shouldnt-start-with-0
    postal: /^[1-9][0-9]{5}$/g,
}, {
    abbrev: 'ID',
    name: 'Indonesia',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'IR',
    name: 'Iran',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'IQ',
    name: 'Iraq',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'IE',
    name: 'Ireland, Republic of',
    // https://stackoverflow.com/questions/33391412/validation-for-irish-eircode
    postal: /(?:^[AC-FHKNPRTV-Y][0-9]{2}|D6W)[ -]?[0-9AC-FHKNPRTV-Y]{4}$/g,
}, {
    abbrev: 'FK',
    name: 'Islas Malvinas',
    postal: /FIQQ 1ZZ/g,
}, {
    abbrev: 'IL',
    name: 'Israel',
    postal: /[0-9]{5}|[0-9]{7}/g,
}, {
    abbrev: 'IT',
    name: 'Italy',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'JP',
    name: 'Japan',
    postal: /[0-9]{3}-[0-9]{4}/g,
}, {
    abbrev: 'JE',
    name: 'Jersey',
    postal: /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/g,
}, {
    abbrev: 'JO',
    name: 'Jordan',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'KZ',
    name: 'Kazakhstan',
    postal: /[0-9]{6}/g,
}, {
    abbrev: 'KE',
    name: 'Kenya',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'KR',
    name: 'Korea, Republic of',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'XK',
    name: 'Kosovo',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'KW',
    name: 'Kuwait',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'KG',
    name: 'Kyrgyzstan',
    postal: /[0-9]{6}/g,
}, {
    abbrev: 'LA',
    name: 'Laos',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'LV',
    name: 'Latvia',
    postal: /LV-[0-9]{4}/g,
}, {
    abbrev: 'LB',
    name: 'Lebanon',
    postal: /[0-9]{4} [0-9]{4}/g,
}, {
    abbrev: 'LS',
    name: 'Lesotho',
    postal: /[0-9]{3}/g,
}, {
    abbrev: 'LR',
    name: 'Liberia',
    postal: /[0-9]{4}/g,
}, {
    abbrev: 'LI',
    name: 'Liechtenstein',
    postal: /[0-9]{4}/g,
    range: ['9485', '9498'],
}, {
    abbrev: 'LT',
    name: 'Lithuania',
    postal: /LT-[0-9]{5}/g,
}, {
    abbrev: 'LU',
    name: 'Luxembourg',
    postal: /[0-9]{4}/g,
}, {
    abbrev: 'MK',
    name: 'Macedonia, Republic of',
    postal: /[0-9]{4}/g,
}, {
    abbrev: 'MG',
    name: 'Madagascar',
    postal: /[0-9]{3}/g,
}, {
    abbrev: 'MY',
    name: 'Malaysia',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'MV',
    name: 'Maldives',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'MT',
    name: 'Malta',
    postal: /[A-Z]{3} [0-9]{4}/g,
}, {
    abbrev: 'MH',
    name: 'Marshall Islands',
    postal: /^\d{5}(?:[-\s]\d{4})?$/g,
    range: ['96960', '96970'],
}, {
    abbrev: 'MQ',
    name: 'Martinique',
    postal: /972[0-9]{2}/g,
    range: ['97200', '97290'],
}, {
    abbrev: 'MU',
    name: 'Mauritius',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'YT',
    name: 'Mayotte',
    postal: /976[0-9]{2}/g,
    range: ['97600', '97690'],
}, {
    abbrev: 'MX',
    name: 'Mexico',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'MD',
    name: 'Moldova, Republic of',
    postal: /MD-?[0-9]{4}/g,
}, {
    abbrev: 'MC',
    name: 'Monaco',
    postal: /980[0-9]{2}/g,
}, {
    abbrev: 'MN',
    name: 'Mongolia',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'ME',
    name: 'Montenegro',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'MS',
    name: 'Montserrat',
    postal: /MSR [0-9]{4}/g,
    range: ['MSR 1110', 'MSR 1350'],
}, {
    abbrev: 'MA',
    name: 'Morocco',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'MZ',
    name: 'Mozambique',
    postal: /[0-9]{4}/g,
}, {
    abbrev: 'MM',
    name: 'Myanmar',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'NP',
    name: 'Nepal',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'NL',
    name: 'Netherlands',
    // https://rgxdb.com/r/4W9GV8AC
    postal: /^(?:NL-)?(\d{4})\s*([A-Z]{2})$/i,
}, {
    abbrev: 'NC',
    name: 'New Caledonia',
    postal: /988[0-9]{2}/g,
    range: ['96950', '96952'],
}, {
    abbrev: 'NZ',
    name: 'New Zealand',
    postal: /[0-9]{4}/g,
}, {
    abbrev: 'NI',
    name: 'Nicaragua',
}, {
    abbrev: 'NE',
    name: 'Niger',
    postal: /[0-9]{4}/g,
}, {
    abbrev: 'NG',
    name: 'Nigeria',
    postal: /[0-9]{6}/g,
}, {
    abbrev: 'NU',
    name: 'Niue',
}, {
    abbrev: 'MP',
    name: 'Northern Mariana Islands',
    postal: /^\d{5}(?:[-\s]\d{4})?$/g,
}, {
    abbrev: 'NO',
    name: 'Norway',
    postal: /[0-9]{4}/g,
}, {
    abbrev: 'OM',
    name: 'Oman',
    postal: /[0-9]{3}/g,
}, {
    abbrev: 'PK',
    name: 'Pakistan',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'PW',
    name: 'Palau',
    postal: /^\d{5}(?:[-\s]\d{4})?$/g,
}, {
    abbrev: 'PA',
    name: 'Panama',
    postal: /[0-9]{4}/g,
}, {
    abbrev: 'PG',
    name: 'Papua New Guinea',
    postal: /[0-9]{3}/g,
}, {
    abbrev: 'PY',
    name: 'Paraguay',
    postal: /[0-9]{4}/g,
}, {
    abbrev: 'PE',
    name: 'Peru',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'PH',
    name: 'Philippines',
    postal: /[0-9]{4}/g,
}, {
    abbrev: 'PL',
    name: 'Poland',
    postal: /[0-9]{2}-[0-9]{3}/g,
}, {
    abbrev: 'PT',
    name: 'Portugal',
    postal: /[0-9]{4}-[0-9]{3}/g,
}, {
    abbrev: 'PR',
    name: 'Puerto Rico',
    postal: /^\d{5}(?:[-\s]\d{4})?$/g,
}, {
    abbrev: 'QA',
    name: 'Qatar',
}, {
    abbrev: 'RE',
    name: 'Réunion',
    postal: /974[0-9]{2}/g,
    range: ['97400', '97490'],
}, {
    abbrev: 'RO',
    name: 'Romania',
    postal: /[0-9]{6}/g,
}, {
    abbrev: 'RU',
    name: 'Russian Federation',
    postal: /[0-9]{6}/g,
}, {
    abbrev: 'MP',
    name: 'Saipan',
    postal: /96950/g,
}, {
    abbrev: 'WS',
    name: 'Samoa',
    postal: /WS[0-9]{4}/g,
}, {
    abbrev: 'SA',
    name: 'Saudi Arabia',
    postal: /[0-9]{5}(-[0-9]{4})?/g,
}, {
    abbrev: 'SN',
    name: 'Senegal',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'RS',
    name: 'Serbia',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'SG',
    name: 'Singapore',
    postal: /[0-9]{6}/g,
}, {
    abbrev: 'SK',
    name: 'Slovakia',
    postal: /[0-9]{3} [0-9]{2}/g,
}, {
    abbrev: 'SI',
    name: 'Slovenia',
    postal: /[0-9]{4}/g,
}, {
    abbrev: 'SO',
    name: 'Somalia',
    postal: /[A-Z]{2} [0-9]{5}/g,
}, {
    abbrev: 'ZA',
    name: 'South Africa',
    postal: /[0-9]{4}/g,
}, {
    abbrev: 'ES',
    name: 'Spain',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'LK',
    name: 'Sri Lanka',
    postal: /[0-9]{4}/g,
}, {
    abbrev: 'BL',
    name: 'St. Barthélemy',
    postal: /[0-9]{5}/g,
    range: ['97100', '97190'],
}, {
    abbrev: 'VI',
    name: 'St. Croix',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'SH',
    name: 'St. Helena',
    postal: /STHL 1ZZ/g,
}, {
    abbrev: 'AG',
    name: 'St. John',
    postal: /^\d{5}(?:[-\s]\d{4})?$/g,
}, {
    abbrev: 'KN',
    name: 'St. Kitts and Nevis',
    postal: /[A-Z]{2}[0-9]{4}/g,
}, {
    abbrev: 'LC',
    name: 'St. Lucia',
    postal: /[A-Z]{2}[0-9]{2} [0-9]{3}/g,
}, {
    abbrev: 'VC',
    name: 'St. Vincent and the Grenadines',
    postal: /VC[0-9]{4}/g,
}, {
    abbrev: 'SD',
    name: 'Sudan',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'SZ',
    name: 'Swaziland',
    postal: /[A-Z]{1}[0-9]{3}/g,
}, {
    abbrev: 'SE',
    name: 'Sweden',
    postal: /[0-9]{3} [0-9]{2}/g,
}, {
    abbrev: 'CH',
    name: 'Switzerland',
    postal: /[0-9]{4}/g,
}, {
    abbrev: 'PF',
    name: 'Tahiti',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'TW',
    name: 'Taiwan',
    postal: /[0-9]{3}(-[0-9]{2})?/g,
}, {
    abbrev: 'TZ',
    name: 'Tanzania',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'TH',
    name: 'Thailand',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'TO',
    name: 'Tonga',
}, {
    abbrev: 'VG',
    name: 'Tortola',
    postal: /VG[0-9]{4}/g,
}, {
    abbrev: 'TT',
    name: 'Trinidad and Tobago',
    postal: /[0-9]{6}/g,
}, {
    abbrev: 'TN',
    name: 'Tunisia',
    postal: /[0-9]{4}/g,
}, {
    abbrev: 'TR',
    name: 'Turkey',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'TM',
    name: 'Turkmenistan',
    postal: /[0-9]{6}/g,
}, {
    abbrev: 'TC',
    name: 'Turks and Caicos Islands',
    postal: /TKCA 1ZZ/g,
}, {
    abbrev: 'UA',
    name: 'Ukraine',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'GB',
    name: 'United Kingdom',
    postal: /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/g,
}, {
    abbrev: 'US',
    name: 'United States of America',
    postal: /^\d{5}(?:[-\s]\d{4})?$/g,
}, {
    abbrev: 'UY',
    name: 'Uruguay',
    postal: /[0-9]{5}/g,
}, {
    abbrev: 'UZ',
    name: 'Uzbekistan',
    postal: /[0-9]{6}/g,
}, {
    abbrev: 'VE',
    name: 'Venezuela',
    postal: /[0-9]{4}(-[A-Z]{1})?/g,
}, {
    abbrev: 'VN',
    name: 'Vietnam',
    postal: /[0-9]{6}/g,
}, {
    abbrev: 'VG',
    name: 'Virgin Islands (British)',
    postal: /VG[0-9]{4}/g,
}, {
    abbrev: 'VI',
    name: 'Virgin Islands (US)',
    range: ['00801', '00851'],
    postal: /^\d{5}(?:[-\s]\d{4})?$/g,
}, {
    abbrev: 'ZM',
    name: 'Zambia',
    postal: /[0-9]{5}/g,
}]

function fillCountryList(countrySelectElement) {
    countryData.forEach(country => {
        let countryOption = document.createElement("option");
        countryOption.value = country.name;
        countryOption.innerHTML = country.name;
        countrySelectElement.appendChild(countryOption);
    })
}

fillCountryList(document.getElementById("country"));
fillCountryList(document.getElementById("shippingCountry"));

function validateInfo() {
    let fields = document.querySelectorAll('input[type = "text"]');
    fields.forEach(field => {
        if (field.value.trim() === "") {
            field.className = 'invalid';
        } else {
            field.className = "info"
        }
    })

    validateCountry();

    if (Array.from(fields).every(field => field.className === "info")) {
        // window.location.pathname = '/Registration-Form/secondStep.html';
        window.location.pathname = '/C:/Users/Vardan/Desktop/Registration%20form/secondStep.html';
    }
}

function validateCountry() {
    let postCode = document.getElementById("postCode");
    let shippingPostCode = document.getElementById("shippingPostCode");
    let countrySelect = document.getElementById("country");
    let shippingCountrySelect = document.getElementById("shippingCountry");

    if (countrySelect.value === "Choose your country") {
        countrySelect.className = "invalid"
    } else {
        countrySelect.className = "info";
        validatePostcode(countrySelect, postCode);
    }

    if (shippingCountrySelect.value === "Choose shipping country") {
        shippingCountrySelect.className = "invalid"
    } else {
        countrySelect.className = "info";
        validatePostcode(shippingCountrySelect, shippingPostCode);
    }
}

function validatePostcode(countryElement, postCodeElement) {
    let invalid = false;

    for (let i = 0; i < countryData.length; i++) {
        let country = countryData[i];

        if (countryElement.value === country.name) {
            if (!!!(postCodeElement.value.match(country.postal))) {
                invalid = true;
                break;
            }
        }
    }

    postCodeElement.className = invalid ? "invalid" : "info";
}

function fillShippingData() {
    let fillData = document.getElementById("fillData");
    let country = document.getElementById("country");
    let city = document.getElementById("city");
    let address = document.getElementById("address");
    let postCode = document.getElementById("postCode");
    let shippingCountry = document.getElementById("shippingCountry");
    let shippingCity = document.getElementById("shippingCity");
    let shippingAddress = document.getElementById("shippingAddress");
    let shippingPostCode = document.getElementById("shippingPostCode");
    let shippingCountryOption = document.getElementById("choose");

    if (fillData.checked) {
        shippingCountry.value = country.value;
        shippingCity.value = city.value;
        shippingAddress.value = address.value;
        shippingPostCode.value = postCode.value;

        shippingCountry.disabled = true;
        shippingCity.disabled = true;
        shippingAddress.disabled = true;
        shippingPostCode.disabled = true;
    } else {
        shippingCountry.value = shippingCountryOption.value;
        shippingCity.value = "";
        shippingAddress.value = "";
        shippingPostCode.value = "";

        shippingCountry.disabled = false;
        shippingCity.disabled = false;
        shippingAddress.disabled = false;
        shippingPostCode.disabled = false;
    }
}