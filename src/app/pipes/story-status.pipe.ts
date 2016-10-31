import { Pipe, PipeTransform } from '@angular/core';
import { UserStory } from '../models/user-story.interface';

@Pipe({
    name: 'storyStatus'
})
export class StoryStatusPipe implements PipeTransform {

    transform(stories: UserStory[], status: number): any {
        return stories.filter(obj => obj.status == status);
    }

}
