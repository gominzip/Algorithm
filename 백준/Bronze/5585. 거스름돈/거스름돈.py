price = int(input())
money = 1000 - price
coin_type = [500, 100, 50, 10, 5, 1]
n = 0

for coin in coin_type:
    n += money // coin
    money = money % coin

print(n)