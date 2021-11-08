class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        const keyword = this.queryStr.keyword
            ? {
                  name: {
                      $regex: this.queryStr.keyword,
                      $options: "i",
                  },
              }
            : {};

        this.query = this.query.find({ ...keyword });
        return this;
    }

    filter() {
        let queryCopy = { ...this.queryStr };
        const removeFields = ["keyword", "page", "limit"];

        // removing field for category
        removeFields.forEach((field) => delete queryCopy[field]);

        // modified queryStr for price
        queryCopy = JSON.stringify(queryCopy);
        queryCopy = queryCopy.replace(
            /\b(gt|gte|lt|lte)\b/g,
            (key) => `$${key}`
        );

        queryCopy = JSON.parse(queryCopy);
        this.query = this.query.find(queryCopy);
        return this;
    }

    pagination(resultPerPage) {
        const currentPage = Number(this.queryStr.page) || 1;
        const skipProducts = resultPerPage * (currentPage - 1);
        this.query = this.query.limit(resultPerPage).skip(skipProducts);
        return this;
    }
}

module.exports = ApiFeatures;
