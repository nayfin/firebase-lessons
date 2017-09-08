export class Lesson {
  constructor(
    public $key: string,
    public description: string,
    public duration: string,
    public longDescription: string,
    public tags: string,
    public url: string,
    public courseId: string,
    public videoUrl: string) {

  }

  get isBeginner() {
    return this.tags && this.tags.includes('BEGINNER');
  }

  static fromJsonList(array): Lesson[] {
    return array.map(Lesson.fromJson);
  }

  static fromJson({$key,
                   description,
                   duration,
                   longDescription,
                   tags,
                   url,
                   courseId,
                   videoUrl}): Lesson {
    return new Lesson( $key,
                       description,
                       duration,
                       longDescription,
                       tags,
                       url,
                       courseId,
                       videoUrl );
  }
}
