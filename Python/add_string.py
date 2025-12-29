# 415. Add Strings - Easy
class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        import sys
        sys.set_int_max_str_digits(6000)
        
        result = int(num1) + int(num2)
        return str(result)
