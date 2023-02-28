const {sequelize, DataTypes} = require('./db')
const {Restaurant, Menu, Item} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
    seedItem
  } = require('./seedData');

describe('Restaurant and Menu Models', function() {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async function() {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });

    test('can create a Restaurant', async function() {
        // const restaurant1 = seedRestaurant[0].name
        const restaurant1 = await Restaurant.create(seedRestaurant[0])
        expect(restaurant1.name).toEqual('AppleBees')
        expect(restaurant1.location).toEqual('Texas')
        expect(restaurant1.cuisine).toEqual('FastFood')
        expect(restaurant1.rating).toEqual(1)
    });

    test('can create a Menu', async function() {
        // TODO - write test
        const menu1 = await Menu.create(seedMenu[0])
        const menu2 = await Menu.create(seedMenu[1])
        expect(menu1.title).toEqual("Breakfast")
        expect(menu2.title).toEqual("Lunch")
    });

    test("can associate many Menu's with many Item's, using eager loading", async function() {
        const item1 = await Item.create(seedItem[0])
        const item2 = await Item.create(seedItem[1])
        const item3 = await Item.create(seedItem[2])
        expect(item1.name).toBe("bhindi masala")
        expect(item1.price).toBe(9.50)
        expect(item1.vegetarian).toBe(true)

        const menu = await Menu.findByPk(1)
        await menu.addItems([1,2])
        // const items = await menu.getItems(menu[0])
        const menu1 = await Menu.findByPk(1, {include: [{model: Item , as: "Items"}]})
        expect(menu1.Items[0].name).toBe("bhindi masala")
        expect(menu1.Items[1].name).toBe("egusi soup")
        expect(menu1.Items[0].price).toBe(9.50)
        expect(menu1.Items[1].price).toBe(10.50)
        expect(menu1.Items[0].vegetarian).toBe(true)
        expect(menu1.Items[1].vegetarian).toBe(false)
    })

    test("can associate many Menu's with one restaurant", async function() {
        const restaurant = await Restaurant.findByPk(1)
        await restaurant.addMenus([1,2])
        const menu = await restaurant.getMenus(restaurant[0])
        expect(menu[0].title).toBe("Breakfast")
        expect(menu[1].title).toBe("Lunch")
    })


    test('can find Restaurants', async function() {
        // TODO - write test
        const restaurant = await Restaurant.findAll({where: {name: "AppleBees", location: "Texas", cuisine: "FastFood", rating: 1}})
        expect(restaurant[0].name).toEqual("AppleBees")
        expect(restaurant[0].location).toEqual("Texas")
        expect(restaurant[0].cuisine).toEqual("FastFood")
        expect(restaurant[0].rating).toEqual(1)
    });

    test('can find Menus', async function() {
        // TODO - write test
        const menu = await Menu.findAll({where: {title: "Breakfast"}})
        expect(menu[0].title).toEqual('Breakfast')
    });

    test('can delete Restaurants', async function() {
        // TODO - write test
        await Restaurant.destroy({where: {name: "AppleBees", location: "Texas", cuisine: "FastFood", rating: 1}})
        const deleteRestaurant = await Restaurant.findAll({where: {name: "AppleBees", location: "Texas", cuisine: "FastFood", rating: 1}})
        expect(deleteRestaurant).not.toEqual({name: "AppleBees", location: "Texas", cuisine: "FastFood", rating: 1})
    });
    
    test('can delete Menus', async function() {
        // TODO - write test
        await Menu.destroy({where: {title: "Breakfast"}})
        const deleteMenu = await Menu.findAll({where: {title: "Breakfast"}})
        expect(deleteMenu).not.toEqual({title: "Breakfast"})
    });
    
})