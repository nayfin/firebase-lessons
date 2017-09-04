export class Course {
  constructor(
    public $key: string,
    public url: string,
    public description: string,
    public iconUrl: string,
    public courseListIcon: boolean,
    public longDescription: string) {

  }

  static fromJsonList(array): Course[] {
    return array.map(Course.fromJson);
  }

  static fromJson({$key,
                   url,
                   description,
                   iconUrl,
                   courseListIcon,
                   longDescription}): Course {
    return new Course( $key,
                       url,
                       description,
                       iconUrl,
                       courseListIcon,
                       longDescription );
  }
}
