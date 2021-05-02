function my_hamming_dna(str1, str2){ 
    var diff= 0;
    if(str1.length != str2.length) {
        return -1;
    } else {
        if(str1.length == 0 && str2.length == 0) {
            return 0;
        } else {
            str2.split('').forEach(function(val, i){
                if (val != str1.charAt(i))
                  diff++;         
          });
          return diff;
        }
    }
}


my_hamming_dna("GGACTGA", "GGACTGA");
my_hamming_dna("ACCAGGG", "ACTATGG");
my_hamming_dna("GGACGGATTCTG", "AGG");
my_hamming_dna("", "");