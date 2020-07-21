import { NgModule } from '@angular/core';
import { GetByIdPipe } from './getById.pipe';
import { TimeAgoPipe } from './time-ago.pipe';
import { OneLetterPipe } from './one-letter.pipe';
import { HtmlToPlainTextPipe } from './html-to-plain-text.pipe';
import { Nl2brPipe } from './nl2br.pipe';
import { FilterPipe } from './filter.pipe';
import {ShortTitlePipe} from '@gaxon/pipes/short-title.pipe';
import {DateAgoPipe} from '@gaxon/pipes/date-ago.pipe';
import {ThousandSuffixesPipe} from '@gaxon/pipes/thousand-suffixes.pipe';

@NgModule({
  imports: [],
  declarations: [
    GetByIdPipe,
    TimeAgoPipe,
    OneLetterPipe,
    HtmlToPlainTextPipe,
    Nl2brPipe,
    FilterPipe,
    ShortTitlePipe,
    DateAgoPipe,
    ThousandSuffixesPipe
  ],
  exports: [
    GetByIdPipe,
    TimeAgoPipe,
    OneLetterPipe,
    HtmlToPlainTextPipe,
    Nl2brPipe,
    FilterPipe,
    ShortTitlePipe,
    DateAgoPipe,
    ThousandSuffixesPipe
  ]
})
export class PipesModule { }
