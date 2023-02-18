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
        });

    //     test('can create a Menu', async function() {
    //         // TODO - write test
    //         expect('NO TEST').toEqual('EXPECTED DATA')
    //     });

    //     test('can find Restaurants', async function() {
    //         // TODO - write test
    //         expect('NO TEST').toEqual('EXPECTED DATA')
    //     });

    //     test('can find Menus', async function() {
    //         // TODO - write test
    //         expect('NO TEST').toEqual('EXPECTED DATA')
    //     });

    //     test('can delete Restaurants', async function() {
    //         // TODO - write test
    //         expect('NO TEST').toEqual('EXPECTED DATA')
    //     });
    })