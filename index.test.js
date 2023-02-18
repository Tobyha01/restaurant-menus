const {sequelize, DataTypes} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
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
            await Restaurant.create(seedRestaurant[0])
            expect(seedRestaurant[0].name).toEqual('AppleBees')
            expect(seedRestaurant[0].location).toEqual('Texas')
            expect(seedRestaurant[0].cuisine).toEqual('FastFood')
            expect(seedRestaurant[0].rating).toEqual(1)
        });

        test('can find Restaurants', async function() {
            // TODO - write test
            const restaurant = await Restaurant.findAll({where: {name: "AppleBees", location: "Texas", cuisine: "FastFood", rating: 1}})
            expect(restaurant[0].name).toEqual("AppleBees")
            expect(restaurant[0].location).toEqual("Texas")
            expect(restaurant[0].cuisine).toEqual("FastFood")
            expect(seedRestaurant[0].rating).toEqual(1)
        });

        test('can delete Restaurants', async function() {
            // TODO - write test
            await Restaurant.destroy({where: {name: "AppleBees", location: "Texas", cuisine: "FastFood", rating: 1}})
            const deleteRestaurant = await Restaurant.findAll({where: {name: "AppleBees", location: "Texas", cuisine: "FastFood", rating: 1}})
            expect(deleteRestaurant).not.toEqual({name: "AppleBees", location: "Texas", cuisine: "FastFood", rating: 1})
        });


        test('can create a Menu', async function() {
            // TODO - write test
            await Menu.create(seedMenu[0])
            expect(seedMenu[0].title).toEqual("Breakfast")
        });

        test('can find Menus', async function() {
            // TODO - write test
            const menu = await Menu.findAll({where: {title: "Breakfast"}})
            expect(menu[0].title).toEqual('Breakfast')
        });

        
        test('can delete Menus', async function() {
            // TODO - write test
            await Menu.destroy({where: {title: "Breakfast"}})
            const deleteMenu = await Menu.findAll({where: {title: "Breakfast"}})
            expect(deleteMenu).not.toEqual({title: "Breakfast"})
        });
    })