import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Marvin',
            email: 'admin@example.com',
            password: bcrypt.hashSync('12345678'),
            isAdmin: true,

        },
        {
            name: 'John',
            email: 'user@example.com',
            password: bcrypt.hashSync('12345678'),
            isAdmin: false,

        },
    ],

    
    products: [
        { 
            name: 'queen-bee-combo',
            slug: 'queen-bee-combo',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 10,
            countInStock: '10',
            brand: 'Nike',
            rating: '4',
            numReviews: "10",
            description: 'high quality product'

        },
        {   //_id: '2',
            name: 'Mademoiselle',
            slug: 'Mademoiselle',
            category: 'Pants',
            image: '/images/p2.jpg',
            price: 10,
            countInStock:'10',
            numReviews: '15',
            brand: 'addidas',
            rating: '4.5',
            description: 'high quality product'

        },
        {   //_id: '3',
            name: 'sunflower',
            slug: 'sunflower',
            category: 'addidas',
            image: '/images/p3.jpg',
            price: 10,
            countInStock: '17',
            numReviews: '20',
            brand: 'Nike',
            rating: '4',

            description: 'high quality product'

        },
        {   //_id: '4',
            name: 'Tulip-yellow',
            slug: 'Tulip-yellow',
            category: 'Shirts',
            image: '/images/p4.jpg',
            price: 10,
            countInStock: '26',
            numReviews: '12',
            brand: 'Nike',
            rating: '4.5',
            description: 'high quality pant'

        },
        
        {   
            name: 'Tulip-yellow-two',
            slug: 'Tulip-yellow-two',
            category: 'Shirts',
            image: '/images/p4.jpg',
            price: 10,
            countInStock: '26',
            numReviews: '12',
            brand: 'Nike',
            rating: '4.5',
            description: 'high quality pant'

        },
        
    ],
};
export default data