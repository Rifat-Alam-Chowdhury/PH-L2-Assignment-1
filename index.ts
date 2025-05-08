{
  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
      return input.toLowerCase();
    } else {
      return input.toUpperCase();
    }
  }

  //------------------------------*-------------------------------//

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    return items.filter((items) => items.rating > 4);
  }

  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
    { title: "Book C", rating: 4.2 },
  ];
  //------------------------------*-------------------------------//

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
  }

  //------------------------------*-------------------------------//

  //------------------------------*-------------------------------//
  class vehicle {
    private make: string;
    private year: number;
    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }

    getInfo() {
      console.log(`make:${this.make} , year ${this.year}`);
    }
  }

  class Car extends vehicle {
    private model: string;
    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }
    getModel() {
      console.log(`model:${this.model}`);
    }
  }

  //------------------------------*-------------------------------//

  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    }
    return value * 2;
  }

  //------------------------------*-------------------------------//

  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;

    return products.reduce((total, product) =>
      product.price > total.price ? product : total
    );
  }

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
  ];

  //------------------------------*-------------------------------//

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    if (day === Day.Sunday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  }

  //------------------------------*-------------------------------//

  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n < 0) {
          reject(new Error("Negative number not allowed"));
        }
        resolve(n * n);
      }, 1000);
    });
  }

  //------------------------------*-------------------------------//
}
