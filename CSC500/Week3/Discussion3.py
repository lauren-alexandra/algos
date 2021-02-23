import array

def addPurchase(purchases, amount):
    purchases.append(amount)

def showLastPurchase(purchases): 
    print (f"${format(purchases[-1], '.2f')}")

def showAllPurchases(purchases):
    print("Weekly Purchases: ")
    for purchase in purchases: 
        print (f"${format(purchase, '.2f')}")

purchases_week_01 = array.array('d', [2.19, 16.49, 3.50, 40.41])

addPurchase(purchases_week_01, 17.03)

showLastPurchase(purchases_week_01) 
# $17.03

showAllPurchases(purchases_week_01)
'''
Weekly Purchases:
$2.19
$16.49
$3.50
$40.41
$17.03
'''