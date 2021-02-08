import countries from "./data";

const resolvers = {
  Query: {
    getCountries(_, args) {
      return this.getCountries.getCountriesByName(args.name);
    },
  },
};

export default resolvers;
