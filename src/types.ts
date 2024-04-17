export interface PackageItem {
  package: {
    name: string;
    version: string;
    description: string;
    links: {
      npm: string;
    };
  };
}
