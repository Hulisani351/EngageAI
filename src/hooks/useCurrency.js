import { useState, useEffect } from 'react';

// Currency conversion rates (simplified - in production you'd use a real API)
const CURRENCY_RATES = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.73,
  ZAR: 18.5, // South African Rand
  CAD: 1.35,
  AUD: 1.52,
  JPY: 150,
  INR: 83,
  BRL: 4.95,
  MXN: 17.2,
  SGD: 1.35,
  HKD: 7.82,
  KRW: 1330,
  CNY: 7.2,
  CHF: 0.88,
  SEK: 10.5,
  NOK: 10.8,
  DKK: 6.9,
  PLN: 4.1,
  CZK: 23.5,
  HUF: 350,
  RUB: 95,
  TRY: 30.5,
  ILS: 3.7,
  AED: 3.67,
  SAR: 3.75,
  QAR: 3.64,
  KWD: 0.31,
  BHD: 0.38,
  OMR: 0.38,
  JOD: 0.71,
  LBP: 1500,
  EGP: 31,
  MAD: 10.2,
  TND: 3.1,
  DZD: 135,
  NGN: 1600,
  GHS: 12.5,
  KES: 160,
  UGX: 3800,
  TZS: 2500,
  ZMW: 25,
  BWP: 13.5,
  NAM: 18.5,
  SZL: 18.5,
  LSL: 18.5,
  MUR: 45,
  SCR: 13.5,
  CDF: 2500,
  XAF: 600,
  XOF: 600,
  XPF: 110,
  XCD: 2.7,
  BBD: 2,
  TTD: 6.8,
  JMD: 155,
  HTG: 130,
  DOP: 58,
  CUP: 24,
  PAB: 1,
  CRC: 520,
  NIO: 36.5,
  HNL: 24.5,
  GTQ: 7.8,
  BZD: 2,
  SVC: 8.75,
  PYG: 7300,
  UYU: 39,
  ARS: 850,
  CLP: 950,
  PEN: 3.7,
  BOB: 6.9,
  COP: 3900,
  VEF: 35,
  VES: 35,
  GYD: 209,
  SRD: 35,
  AWG: 1.8,
  ANG: 1.8,
  XCD: 2.7,
  BBD: 2,
  TTD: 6.8,
  JMD: 155,
  HTG: 130,
  DOP: 58,
  CUP: 24,
  PAB: 1,
  CRC: 520,
  NIO: 36.5,
  HNL: 24.5,
  GTQ: 7.8,
  BZD: 2,
  SVC: 8.75,
  PYG: 7300,
  UYU: 39,
  ARS: 850,
  CLP: 950,
  PEN: 3.7,
  BOB: 6.9,
  COP: 3900,
  VEF: 35,
  VES: 35,
  GYD: 209,
  SRD: 35,
  AWG: 1.8,
  ANG: 1.8,
};

const CURRENCY_SYMBOLS = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  ZAR: 'R',
  CAD: 'C$',
  AUD: 'A$',
  JPY: '¥',
  INR: '₹',
  BRL: 'R$',
  MXN: '$',
  SGD: 'S$',
  HKD: 'HK$',
  KRW: '₩',
  CNY: '¥',
  CHF: 'CHF',
  SEK: 'kr',
  NOK: 'kr',
  DKK: 'kr',
  PLN: 'zł',
  CZK: 'Kč',
  HUF: 'Ft',
  RUB: '₽',
  TRY: '₺',
  ILS: '₪',
  AED: 'د.إ',
  SAR: 'ر.س',
  QAR: 'ر.ق',
  KWD: 'د.ك',
  BHD: 'د.ب',
  OMR: 'ر.ع.',
  JOD: 'د.أ',
  LBP: 'ل.ل',
  EGP: 'ج.م',
  MAD: 'د.م.',
  TND: 'د.ت',
  DZD: 'د.ج',
  NGN: '₦',
  GHS: 'GH₵',
  KES: 'KSh',
  UGX: 'USh',
  TZS: 'TSh',
  ZMW: 'ZK',
  BWP: 'P',
  NAM: 'N$',
  SZL: 'E',
  LSL: 'L',
  MUR: '₨',
  SCR: '₨',
  CDF: 'FC',
  XAF: 'FCFA',
  XOF: 'CFA',
  XPF: 'CFP',
  XCD: 'EC$',
  BBD: 'Bds$',
  TTD: 'TT$',
  JMD: 'J$',
  HTG: 'G',
  DOP: 'RD$',
  CUP: '$',
  PAB: 'B/.',
  CRC: '₡',
  NIO: 'C$',
  HNL: 'L',
  GTQ: 'Q',
  BZD: 'BZ$',
  SVC: '₡',
  PYG: '₲',
  UYU: '$U',
  ARS: '$',
  CLP: '$',
  PEN: 'S/',
  BOB: 'Bs',
  COP: '$',
  VEF: 'Bs',
  VES: 'Bs',
  GYD: 'G$',
  SRD: '$',
  AWG: 'ƒ',
  ANG: 'ƒ',
};

export const useCurrency = () => {
  const [userCurrency, setUserCurrency] = useState(() => {
    // Check localStorage first
    const saved = localStorage.getItem('userCurrency');
    return saved || 'USD';
  });
  const [userCountry, setUserCountry] = useState('US');
  const [isLoading, setIsLoading] = useState(true);

  const updateCurrency = (newCurrency) => {
    setUserCurrency(newCurrency);
    localStorage.setItem('userCurrency', newCurrency);
  };

  useEffect(() => {
    const detectLocation = async () => {
      try {
        console.log('Detecting user location...');
        
        // Try multiple geolocation APIs for better reliability
        let locationData = null;
        
        // Try ipapi.co first
        try {
          const response = await fetch('https://ipapi.co/json/');
          locationData = await response.json();
          console.log('ipapi.co data:', locationData);
        } catch (error) {
          console.log('ipapi.co failed, trying alternative...');
        }
        
        // If ipapi.co failed, try ipinfo.io
        if (!locationData || !locationData.currency_code) {
          try {
            const response = await fetch('https://ipinfo.io/json');
            locationData = await response.json();
            console.log('ipinfo.io data:', locationData);
            // ipinfo.io doesn't provide currency, so we'll use country code
          } catch (error) {
            console.log('ipinfo.io also failed...');
          }
        }
        
        // Determine currency from location data
        let detectedCurrency = null;
        let detectedCountry = null;
        
        if (locationData) {
          if (locationData.currency_code && CURRENCY_RATES[locationData.currency_code]) {
            detectedCurrency = locationData.currency_code;
            detectedCountry = locationData.country_code;
            console.log(`Setting currency to ${detectedCurrency} for ${detectedCountry}`);
          } else if (locationData.country) {
            // Use country code to determine currency
            const countryToCurrency = {
              'GB': 'GBP',
              'ZA': 'ZAR',
              'CA': 'CAD',
              'AU': 'AUD',
              'JP': 'JPY',
              'IN': 'INR',
              'BR': 'BRL',
              'MX': 'MXN',
              'SG': 'SGD',
              'HK': 'HKD',
              'KR': 'KRW',
              'CN': 'CNY',
              'CH': 'CHF',
              'SE': 'SEK',
              'NO': 'NOK',
              'DK': 'DKK',
              'PL': 'PLN',
              'CZ': 'CZK',
              'HU': 'HUF',
              'RU': 'RUB',
              'TR': 'TRY',
              'IL': 'ILS',
              'AE': 'AED',
              'SA': 'SAR',
              'QA': 'QAR',
              'KW': 'KWD',
              'BH': 'BHD',
              'OM': 'OMR',
              'JO': 'JOD',
              'LB': 'LBP',
              'EG': 'EGP',
              'MA': 'MAD',
              'TN': 'TND',
              'DZ': 'DZD',
              'NG': 'NGN',
              'GH': 'GHS',
              'KE': 'KES',
              'UG': 'UGX',
              'TZ': 'TZS',
              'ZM': 'ZMW',
              'BW': 'BWP',
              'NA': 'NAM',
              'SZ': 'SZL',
              'LS': 'LSL',
              'MU': 'MUR',
              'SC': 'SCR',
              'CD': 'CDF',
              'CM': 'XAF',
              'SN': 'XOF',
              'PF': 'XPF',
            };
            
            const countryCode = locationData.country;
            if (countryToCurrency[countryCode]) {
              detectedCurrency = countryToCurrency[countryCode];
              detectedCountry = countryCode;
              console.log(`Setting currency to ${detectedCurrency} for ${detectedCountry} from country code`);
            }
          }
        }
        
        // If still no currency detected, try browser locale
        if (!detectedCurrency) {
          console.log('No currency from geolocation, trying browser locale...');
          const locale = navigator.language || navigator.userLanguage;
          const country = locale.split('-')[1] || 'US';
          
          console.log('Browser locale:', locale, 'Country:', country);
          
          const countryToCurrency = {
            'GB': 'GBP',
            'ZA': 'ZAR',
            'CA': 'CAD',
            'AU': 'AUD',
            'JP': 'JPY',
            'IN': 'INR',
            'BR': 'BRL',
            'MX': 'MXN',
            'SG': 'SGD',
            'HK': 'HKD',
            'KR': 'KRW',
            'CN': 'CNY',
            'CH': 'CHF',
            'SE': 'SEK',
            'NO': 'NOK',
            'DK': 'DKK',
            'PL': 'PLN',
            'CZ': 'CZK',
            'HU': 'HUF',
            'RU': 'RUB',
            'TR': 'TRY',
            'IL': 'ILS',
            'AE': 'AED',
            'SA': 'SAR',
            'QA': 'QAR',
            'KW': 'KWD',
            'BH': 'BHD',
            'OM': 'OMR',
            'JO': 'JOD',
            'LB': 'LBP',
            'EG': 'EGP',
            'MA': 'MAD',
            'TN': 'TND',
            'DZ': 'DZD',
            'NG': 'NGN',
            'GH': 'GHS',
            'KE': 'KES',
            'UG': 'UGX',
            'TZ': 'TZS',
            'ZM': 'ZMW',
            'BW': 'BWP',
            'NA': 'NAM',
            'SZ': 'SZL',
            'LS': 'LSL',
            'MU': 'MUR',
            'SC': 'SCR',
            'CD': 'CDF',
            'CM': 'XAF',
            'SN': 'XOF',
            'PF': 'XPF',
          };
          
          if (countryToCurrency[country]) {
            detectedCurrency = countryToCurrency[country];
            detectedCountry = country;
            console.log(`Setting currency to ${detectedCurrency} for ${detectedCountry} from browser locale`);
          } else {
            console.log('No currency mapping found, using USD');
            detectedCurrency = 'USD';
            detectedCountry = 'US';
          }
        }
        
        // Set the detected currency and country
        setUserCurrency(detectedCurrency);
        setUserCountry(detectedCountry);
        localStorage.setItem('userCurrency', detectedCurrency);
        
      } catch (error) {
        console.error('Error detecting location:', error);
        console.log('Could not detect location, using USD as default');
        setUserCurrency('USD');
        setUserCountry('US');
      } finally {
        setIsLoading(false);
      }
    };

    // Always detect location on first load, regardless of localStorage
    detectLocation();
  }, []);

  const convertPrice = (usdPrice) => {
    if (!CURRENCY_RATES[userCurrency]) return { amount: usdPrice, symbol: '$', currency: 'USD' };
    
    const convertedAmount = usdPrice * CURRENCY_RATES[userCurrency];
    
    // Round to appropriate decimal places
    let roundedAmount;
    if (userCurrency === 'JPY' || userCurrency === 'KRW' || userCurrency === 'VND') {
      roundedAmount = Math.round(convertedAmount);
    } else {
      roundedAmount = Math.round(convertedAmount * 100) / 100;
    }
    
    return {
      amount: roundedAmount,
      symbol: CURRENCY_SYMBOLS[userCurrency] || userCurrency,
      currency: userCurrency
    };
  };

  const formatPrice = (usdPrice) => {
    const converted = convertPrice(usdPrice);
    return `${converted.symbol}${converted.amount}`;
  };

  return {
    userCurrency,
    userCountry,
    isLoading,
    convertPrice,
    formatPrice,
    updateCurrency
  };
};
