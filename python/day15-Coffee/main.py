MENU = {
    "espresso": {
        "ingredients": {
            "water": 50,
            "coffee": 18,
        },
        "cost": 1.5,
    },
    "latte": {
        "ingredients": {
            "water": 200,
            "milk": 150,
            "coffee": 24,
        },
        "cost": 2.5,
    },
    "cappuccino": {
        "ingredients": {
            "water": 250,
            "milk": 100,
            "coffee": 24,
        },
        "cost": 3.0,
    }
}

resources = {
    "water": 300,
    "milk": 200,
    "coffee": 100,
}

shortCutMenu = {"1": "espresso", "2": "latte", "3": "cappuccino"}

monies = {"Q": 0.25, "D": 0.10, "N": 0.05, "P": 0.01, "100": 100}

running = True

while running:
    for thing in resources:
        print(thing, resources[thing])

    choice = input(
        "What kind of drink would you like?\n1. espresso\n2. latte\n3. cappuccino\n"
    )

    drink = MENU[shortCutMenu[choice]]
    ingredients, cost = drink.values()

    for item in ingredients:
        tempResources = resources[item] - ingredients[item]
        if tempResources < 0:
            print(f"We are out of {item}")
            running = False

    if running:
        payment = 0
        while payment < cost:
            money = input('Input Payment: Q, D, N, P or Cancel or 100\n')
            if (money.lower() == 'cancel'):
                running = False
            else:
                payment += monies[money.upper()]
                print(f"payment remaining {cost - payment}")
        if payment > cost:
            print(f"Returning {payment - cost}")
    if not running:
        print("Returning Money")

    for item in ingredients:
        resources[item] -= ingredients[item]

    print(f"Dispensing {shortCutMenu[choice]}")

print("EXITING")