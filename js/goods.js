class ProductMaker {
    constructor(title, price, image) {
        this.id = 0;
        this.title = title;
        this.price = price;
        this.image = image;
        this.quantity = 1;
    }
}
const goodsArray = [new ProductMaker('Black and Gray Athletic Cotton Socks - 6 Pairs', 1090,
                                     'https://supersimple.dev/projects/amazon/images/products/athletic-cotton-socks-6-pairs.jpg'),
                    new ProductMaker('Intermediate Size Basketball', 2095,
                                     'https://supersimple.dev/projects/amazon/images/products/intermediate-composite-basketball.jpg'),
                    new ProductMaker('Adults Plain Cotton T-Shirt - 2 Pack', 799,
                                     'https://supersimple.dev/projects/amazon/images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg'),
                    new ProductMaker('2 Slot Toaster - Black', 1899,
                                     'https://supersimple.dev/projects/amazon/images/products/black-2-slot-toaster.jpg'),
                    new ProductMaker('6 Piece White Dinner Plate Set', 2067,
                                     'https://supersimple.dev/projects/amazon/images/products/6-piece-white-dinner-plate-set.jpg'),
                    new ProductMaker('6-Piece Nonstick, Carbon Steel Oven Bakeware', 3499,
                                     'https://supersimple.dev/projects/amazon/images/products/6-piece-non-stick-baking-set.webp'),
                    new ProductMaker('Plain Hooded Fleece Sweatshirt', 2400,
                                     'https://supersimple.dev/projects/amazon/images/products/plain-hooded-fleece-sweatshirt-yellow.jpg'),
                    new ProductMaker('Luxury Towel Set - Graphite Gray', 3599,
                                     'https://supersimple.dev/projects/amazon/images/products/luxury-tower-set-6-piece.jpg'),
                    new ProductMaker('Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz', 2899,
                                     'https://supersimple.dev/projects/amazon/images/products/liquid-laundry-detergent-plain.jpg'),
                    new ProductMaker('Waterproof Knit Athletic Sneakers - Gray', 3390,
                                     'https://supersimple.dev/projects/amazon/images/products/knit-athletic-sneakers-gray.jpg'),
                    new ProductMaker("Women's Chiffon Beachwear Cover Up", 2070,
                                     'https://supersimple.dev/projects/amazon/images/products/women-chiffon-beachwear-coverup-black.jpg'),
                    new ProductMaker('Round Sunglasses', 1560,
                                     'https://supersimple.dev/projects/amazon/images/products/round-sunglasses-black.jpg'),
                    new ProductMaker("Women's Two Strap Buckle Sandals - Tan", 2499,
                                     'https://supersimple.dev/projects/amazon/images/products/women-beach-sandals.jpg'),
                    new ProductMaker('Blackout Curtains Set 4-Pack - Beige', 4599,
                                     'https://supersimple.dev/projects/amazon/images/products/blackout-curtain-set-beige.webp'),
                    new ProductMaker("Men's Slim-Fit Summer Shorts", 1699, 'https://supersimple.dev/projects/amazon/images/products/men-slim-fit-summer-shorts-gray.jpg')];

goodsArray.forEach((elem, index) => {
    goodsArray[index].id = index + 1;
});