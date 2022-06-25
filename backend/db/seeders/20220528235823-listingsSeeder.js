"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Listings",
      [
        {
          userId: 1,
          name: "Hummingbird Ranch",
          state: "Arizona",
          country: "USA",
          cost: 160,
          img1: "https://blog.architizer.com/wp-content/uploads/1590962864677Whidbey-Island-Farmhouse_35.jpg",
          img2: "https://blog.architizer.com/wp-content/uploads/1590962965252Whidbey-Island-Farmhouse_38-1024x717.jpg",
          img3: "https://www.decorilla.com/online-decorating/wp-content/uploads/2020/09/Light-modern-cabin-interior-living-and-dining-area-4.jpg",
          img4: "https://images.squarespace-cdn.com/content/v1/592e07c6e4fcb5f8d85914ac/1578003212612-68NLPVE2XIOOS6A41DOL/Whidbey+Island+Farmhouse_05.jpg?format=2500w",
          img5: "https://images.squarespace-cdn.com/content/v1/592e07c6e4fcb5f8d85914ac/1578009499127-2SZIC402UGU2DE3PBUA8/Whidbey+Island+Farmhouse_16.jpg?format=2500w",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          name: "Dreamy Treehouse",
          state: "Colorado",
          country: "USA",
          cost: 170,
          img1: "https://a0.muscache.com/im/pictures/1a2378e8-88b8-4fc7-b69e-0d1ddf61fe27.jpg?im_w=1440",
          img2: "https://a0.muscache.com/im/pictures/f34aa0f5-73d9-43ef-9091-10bef196c08a.jpg?im_w=1440",
          img3: "https://a0.muscache.com/im/pictures/1ca070c6-2d07-4527-8732-e1308b343414.jpg?im_w=1440",
          img4: "https://a0.muscache.com/im/pictures/47803dc5-9700-482c-94e8-56264d0fa22d.jpg?im_w=1440",
          img5: "https://a0.muscache.com/im/pictures/942f695e-7ce5-46f6-92ce-3aafa44e0fa9.jpg?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          name: "Sugar Bear Cove",
          state: "Shirley, British Columbia",
          country: "Canada",
          cost: 230,
          img1: "https://a0.muscache.com/im/pictures/miso/Hosting-45254853/original/dd66383b-1cd1-4c8a-9a2e-d7bdf38d53b8.jpeg?im_w=1200",
          img2: "https://a0.muscache.com/im/pictures/miso/Hosting-45254853/original/ec6eba8e-487d-47c8-beb8-501856a74d84.jpeg?im_w=1440",
          img3: "https://a0.muscache.com/im/pictures/miso/Hosting-45254853/original/bfd01c6d-64ed-48b1-9643-7ce68c6ea8f1.jpeg?im_w=1440",
          img4: "https://a0.muscache.com/im/pictures/miso/Hosting-45254853/original/395aaa63-b757-419a-9971-16c41b225e81.jpeg?im_w=1440",
          img5: "https://a0.muscache.com/im/pictures/cf45273a-e47a-4f40-9544-1712793d6de1.jpg?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          name: "Eco Friendly Tiny House",
          state: "Machachi, Pichincha",
          country: "Ecuador",
          cost: 168,
          img1: "https://a0.muscache.com/im/pictures/miso/Hosting-33996825/original/ae88e614-cd39-4503-b16c-e2a7a98556f5.jpeg?im_w=1200",
          img2: "https://a0.muscache.com/im/pictures/miso/Hosting-33996825/original/48c95051-7020-4404-b41d-fbbe50934892.jpeg?im_w=1200",
          img3: "https://a0.muscache.com/im/pictures/miso/Hosting-33996825/original/721ab38a-1fe7-4ce2-acc2-4ac776ab9b4f.jpeg?im_w=1200",
          img4: "https://a0.muscache.com/im/pictures/miso/Hosting-33996825/original/a1e5823e-181e-48a9-9f11-e676208f3fe2.jpeg?im_w=1200",
          img5: "https://a0.muscache.com/im/pictures/miso/Hosting-33996825/original/0c54373e-2679-4ecc-9483-75a434b33209.jpeg?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          name: "Midcentury in the Poconos",
          state: "Pennsylvania",
          country: "USA",
          cost: 200,
          img1: "https://a0.muscache.com/im/pictures/77c897ae-e66b-4b16-8e50-da04b868c3bd.jpg?im_w=1200",
          img2: "https://a0.muscache.com/im/pictures/7506ed6e-4ba5-4a79-8b03-2a450b9fe17d.jpg?im_w=1440",
          img3: "https://a0.muscache.com/im/pictures/87db02c0-e636-4a3e-94f2-825f2c3bfb32.jpg?im_w=1440",
          img4: "https://a0.muscache.com/im/pictures/3dd1496d-e2d5-4b56-9a86-15b366e2cbcf.jpg?im_w=1440",
          img5: "https://a0.muscache.com/im/pictures/08d46d91-0b43-4b62-9b21-6f292c2fe85a.jpg?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          name: "Treeloft at Basecamp",
          state: "Missouri",
          country: "USA",
          cost: 350,
          img1: "https://a0.muscache.com/im/pictures/56dd4335-57f0-4e32-a823-f00cc2a73589.jpg?im_w=1200",
          img2: "https://a0.muscache.com/im/pictures/3b8e9fda-1cdb-4d96-bc45-70051eda0249.jpg?im_w=1440",
          img3: "https://a0.muscache.com/im/pictures/e8a0cd42-8b22-48ac-83ee-33bee67b4534.jpg?im_w=1440",
          img4: "https://a0.muscache.com/im/pictures/ade80568-ff3a-4f6f-a854-194d8f7c5c02.jpg?im_w=1440",
          img5: "https://a0.muscache.com/im/pictures/904117df-1673-4478-b9fb-707b43d765b6.jpg?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          name: "AL CAPANNO",
          state: "Schignano, Lombardia",
          country: "Italy",
          cost: 159,
          img1: "https://a0.muscache.com/im/pictures/4eea9afb-4df0-4adc-8cd4-737d9711c43b.jpg?im_w=1440",
          img2: "https://a0.muscache.com/im/pictures/d14d06ba-43bf-4bbc-b643-0ac8368c51af.jpg?im_w=1440",
          img3: "https://a0.muscache.com/im/pictures/c02dbe75-b53b-4107-b63a-4d5394f0acd6.jpg?im_w=1440",
          img4: "https://a0.muscache.com/im/pictures/f1ba201d-b032-4251-811e-867162cfb0e3.jpg?im_w=1440",
          img5: "https://a0.muscache.com/im/pictures/64a42df6-a92f-49a3-b8c4-8306eb323f98.jpg?im_w=1440",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          name: "Espectacular cabaña privada.",
          state: "Calabazas, San Sebastián",
          country: "Puerto Rico",
          cost: 204,
          img1: "https://a0.muscache.com/im/pictures/miso/Hosting-556281384899434813/original/02cf7ce7-3d03-439b-bde4-81f74f61cebc.jpeg?im_w=1440",
          img2: "https://a0.muscache.com/im/pictures/miso/Hosting-556281384899434813/original/9ff7ce7d-fcfd-4fd9-b4dd-460b0afb16d0.jpeg?im_w=1440",
          img3: "https://a0.muscache.com/im/pictures/miso/Hosting-556281384899434813/original/e236c69d-f2e1-4cc0-864f-059604b5508d.jpeg?im_w=1440",
          img4: "https://a0.muscache.com/im/pictures/miso/Hosting-556281384899434813/original/37b676a2-a2f1-4554-a55a-d0fa7ade4c97.jpeg?im_w=1200",
          img5: "https://a0.muscache.com/im/pictures/miso/Hosting-556281384899434813/original/7de07506-04c3-4bd5-ba87-74da2c4b3f26.jpeg?im_w=1440",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          name: "AlmaMar – beachfront house",
          state: "Navidad",
          country: "Chile",
          cost: 308,
          img1: "https://a0.muscache.com/im/pictures/997261b3-1645-4766-bb72-dae4caca150c.jpg?im_w=1200",
          img2: "https://a0.muscache.com/im/pictures/3428ed39-728f-4599-b643-5f7ca7b8c25a.jpg?im_w=1440",
          img3: "https://a0.muscache.com/im/pictures/1ce99f20-8339-45a1-977a-cd5891c28876.jpg?im_w=1440",
          img4: "https://a0.muscache.com/im/pictures/7adf0cbe-5638-4cab-996a-bf0e3e2cf71b.jpg?im_w=1440",
          img5: "https://a0.muscache.com/im/pictures/4422660e-9869-491a-81aa-4d4ec25f6e5f.jpg?im_w=1440",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          name: "Historic Owl Pine Cabin",
          state: "Idyllwild-Pine Cove, CA",
          country: "USA",
          cost: 308,
          img1: "https://a0.muscache.com/im/pictures/20dd0cef-d631-4d8e-afc8-97df3d8ff341.jpg?im_w=1200",
          img2: "https://a0.muscache.com/im/pictures/miso/Hosting-16379417/original/5ec9af62-48c0-4795-b1c1-e94300ae6ffb.jpeg?im_w=1440",
          img3: "https://a0.muscache.com/im/pictures/729a852b-7199-4ac0-a00f-ee6c07927102.jpg?im_w=1440",
          img4: "https://a0.muscache.com/im/pictures/miso/Hosting-16379417/original/0dac24dc-bd65-4484-bb03-cf334be129d4.jpeg?im_w=1440",
          img5: "https://a0.muscache.com/im/pictures/1a7b6181-1b71-4f97-9274-1feed1668076.jpg?im_w=1440",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          name: "Dreamy A-Frame Cabin in the Woods",
          state: "Idyllwild-Pine Cove, CA",
          country: "USA",
          cost: 388,
          img1: "https://a0.muscache.com/im/pictures/miso/Hosting-25518501/original/21bf4587-e883-4265-b053-f89a050c4f58.png?im_w=1200",
          img2: "https://a0.muscache.com/im/pictures/miso/Hosting-25518501/original/001d13e0-2c9d-49dd-8d1f-44b747a623f2.jpeg?im_w=1440",
          img3: "https://a0.muscache.com/im/pictures/miso/Hosting-25518501/original/d9ac62b6-8c8e-467b-962b-02e8a952306f.jpeg?im_w=1440",
          img4: "https://a0.muscache.com/im/pictures/miso/Hosting-25518501/original/e763814d-7b85-43f5-accb-ffc9383926e4.jpeg?im_w=1440",
          img5: "https://a0.muscache.com/im/pictures/miso/Hosting-25518501/original/46f8e74d-9ac3-4056-b09b-00b1f834c8ee.jpeg?im_w=1440",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          name: "Casa Valentina",
          state: "Rincon",
          country: "Puerto Rico",
          cost: 220,
          img1: "https://a0.muscache.com/im/pictures/563fcb16-5370-4d4f-a64d-b622fd71ea9b.jpg?im_w=1200",
          img2: "https://a0.muscache.com/im/pictures/f1876ae8-6c16-453d-8d7d-8101bc1c5b0a.jpg?im_w=1440",
          img3: "https://a0.muscache.com/im/pictures/9f056a4a-c3ba-430e-a0ac-332d9f909c46.jpg?im_w=1440",
          img4: "https://a0.muscache.com/im/pictures/73045e62-e054-4e23-8157-6e00406ba91d.jpg?im_w=1440",
          img5: "https://a0.muscache.com/im/pictures/5fc519e4-3f3a-4317-ab13-909738350e65.jpg?im_w=1440",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          name: "ANAND Ecoaldea I Shama Lodge",
          state: "Puerto Morelos, Quintana Roo",
          country: "Mexico",
          cost: 146,
          img1: "https://a0.muscache.com/im/pictures/37210b14-1d96-4b8f-9df1-80f6e18df54a.jpg?im_w=1200",
          img2: "https://a0.muscache.com/im/pictures/e0e41c0c-670b-4684-9cec-d71336715bd6.jpg?im_w=1440",
          img3: "https://a0.muscache.com/im/pictures/190ae6ab-2988-472c-bba6-dad84ea3288a.jpg?im_w=1440",
          img4: "https://a0.muscache.com/im/pictures/61aeef6d-3294-4c00-ae8c-e5f35655c749.jpg?im_w=1440",
          img5: "https://a0.muscache.com/im/pictures/b1d5860f-7cae-4ec4-a214-b259b7b6e01c.jpg?im_w=1440",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          name: "EL BOHÍO DE DIEGO",
          state: "Vinales, Pinar del Rio",
          country: "Cuba",
          cost: 20,
          img1: "https://a0.muscache.com/im/pictures/c6a5624c-3d68-4cbe-9072-98945d2fdf38.jpg?im_w=1200",
          img2: "https://a0.muscache.com/im/pictures/38ef7962-cc3d-4c26-b3ab-da64356ffd50.jpg?im_w=1440",
          img3: "https://a0.muscache.com/im/pictures/76f1344f-91f5-4c80-8c57-7adeaa60f383.jpg?im_w=1440",
          img4: "https://a0.muscache.com/im/pictures/a3f12daf-eebb-4a11-a633-cff8bbad2371.jpg?im_w=1440",
          img5: "https://a0.muscache.com/im/pictures/e74e263d-da71-4cb5-a725-d367774cd47a.jpg?im_w=1440",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          name: "Chalé na Árvore - Lendas do Capão",
          state: "Palmeiras, Bahia",
          country: "Brazil",
          cost: 222,
          img1: "https://a0.muscache.com/im/pictures/431cb8c0-9bd8-4233-9b0f-6da21c72a7bf.jpg?im_w=1200",
          img2: "https://a0.muscache.com/im/pictures/be205f4f-1ec1-403e-86cc-d8b07b4bacca.jpg?im_w=720",
          img3: "https://a0.muscache.com/im/pictures/03c4d303-184c-472d-90dc-0ca0df633c7d.jpg?im_w=720",
          img4: "https://a0.muscache.com/im/pictures/ee6992ef-1c64-4163-a801-ce0783e058d7.jpg?im_w=720",
          img5: "https://a0.muscache.com/im/pictures/17d73640-bb39-4198-84ca-674bd8bfa9cf.jpg?im_w=1440",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Listings", null, {});
  },
};
