/**
 * Widget script for Validating IMEI
 */


export default class CheckImei {

    // ==========================================================================
    // Constructor
    // ==========================================================================
    constructor() {
    }

     // ==========================================================================
	// Check IMEI validity
	// return: Boolean
	// ==========================================================================


	/*
	 * JavaScript implementation of the Luhn algorithm, with calculation and validation functions
	 */

	/* luhn_checksum
	 * Implement the Luhn algorithm to calculate the Luhn check digit.
	 * Return the check digit.
	 */
	luhn_checksum(code) {

		var _self = this,
			len = code.length,
			parity = len % 2,
			sum = 0;

	    for (var i = len-1; i >= 0; i--) {
	        
	        var d = parseInt(code.charAt(i));

	        if (i % 2 == parity) { 
	        	d *= 2 
	        }
	        if (d > 9) { 
	        	d -= 9; 
	        }
	        sum += d;
	    }
	    return sum % 10;
	}

	/* luhn_caclulate
	 * Return a full code (including check digit), from the specified partial code (without check digit).
	 */
	luhn_caclulate(partcode) {
	    var _self = this,
	    	checksum = _self.luhn_checksum(partcode + "0");

	    return checksum == 0 ? 0 : 10 - checksum;
	}

	/* luhn_validate
	 * Return true if specified code (with check digit) is valid.
	 */
	luhn_validate(fullcode) {
		var _self = this;

	    return ( fullcode !== '') ? _self.luhn_checksum(fullcode) == 0 : false;
	}



}