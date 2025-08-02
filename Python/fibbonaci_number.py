# [ Easy ] Fibbonaci Number
class Solution:
    def fib(self, n: int) -> int:
        arr = [0, 1]
        if n <= 0:
            return arr[0]
        elif n == 1:
            return arr[1]
        else:
            for x in range(2, n + 1):
                arr.append(arr[len(arr) - 1] + arr[len(arr) - 2])
            return arr[len(arr) - 1]
