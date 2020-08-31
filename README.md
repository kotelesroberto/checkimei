# CHECK IMEI

## About the code
This snippet is for checking IMEI if it was valid.

## How to use

1. Import library
```
import CheckImei from '../../js/widgets/check-imei.js';
```

2. Create instance
```
let checkImei = new CheckImei();
```

3. Call validator

```
let imei = '123456789123789';
let validity = checkImei.luhn_validate( imei );
console.log(validity);
```


