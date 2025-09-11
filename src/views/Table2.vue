<template>
  <div class="table-txt">
    <p>Table 2 functionality:</p>
    <ul class="table-txt__ul">
      <li>adaptive for different screen sizes: scrolling in two directions</li>
      <li>fixed table header and cell of the row</li>
      <li>table width - by content</li>
      <li>custom scrollbar style</li>
      <li>CSS Scroll Shadows</li>
      <li>dark and light theme for the table implemented with filter CSS</li>
      <li>all table cells (including fixed ones) have a border</li>
      <li>
        The minimum border thickness is 1px. The border of adjacent cells does
        not collapse even though border-collapse: initial; With border-collapse:
        collapse; Fixed cells cannot be given a border that does not disappear
        when the table is scrolled.
      </li>
    </ul>
  </div>

  <button class="btn-show-table" type="button" @click="showDialog">show table Tenses in English</button>

  <Dialog :active="activeDialog" @active="closeDialog">
    <h2 class="table-title">Tenses in English</h2>
    <div class="wrap-table" :class="wrapTableClass" ref="wrapRef">
      <table class="table" ref="tableRef">
        <thead class="t-head-fixed">
          <tr>
            <th scope="row"></th>
            <th>Simple</th>
            <th>Continuous</th>
            <th>Perfect</th>
            <th>Perfect Continuous </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">Present</td>
            <td>
              <table class="table table__in-td">
                <thead>
                  <tr>
                    <th></th>
                    <th colspan="3">TO BE</th>
                    <!-- <th></th> -->
                    <!-- <th></th> -->
                  </tr>
                  <tr>
                    <th></th>
                    <th>He, she, it</th>
                    <th>I</th>
                    <th>You, we, they</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Affirmative</td>
                    <td>Is (’s)</td>
                    <td>Am (’m)</td>
                    <td>Are (’re)</td>
                  </tr>
                  <tr>
                    <td>Negative</td>
                    <td>Is not (isn’t)</td>
                    <td>Am not (’m not)</td>
                    <td>Are not (aren’t)</td>
                  </tr>
                  <tr>
                    <td>Question</td>
                    <td>Is she?</td>
                    <td>Am I?</td>
                    <td>Are you?</td>
                  </tr>
                  <tr>
                    <td>Wh-question</td>
                    <td>Where is she?</td>
                    <td>Where am I?</td>
                    <td>Where are you?</td>
                  </tr>
                </tbody>
              </table>
              <!-- <div class="exx">
                <div class="exx__item">
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental"> </span>  
                    </p>
                    <p class="exx__txt-translation"></p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental"> </span>  
                    </p>
                    <p class="exx__txt-translation"></p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">  
                      <span class="exx__color-incidental"> </span>  
                    </p>
                    <p class="exx__txt-translation"></p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">  
                      <span class="exx__color-incidental"> </span>  
                    </p>
                    <p class="exx__txt-translation"></p>
                  </div>
                </div>                
              </div> -->
              <div class="exx">
                <div class="exx__item">
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">He </span>
                      is a musician.
                    </p>
                    <p class="exx__txt-translation">Він музикант.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">He </span>
                      is not a musician.
                    </p>
                    <p class="exx__txt-translation">Він не музикант.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Is
                      <span class="exx__color-incidental">he</span>
                      a musician?
                    </p>
                    <p class="exx__txt-translation">Він музикант?</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Why is
                      <span class="exx__color-incidental">he</span>
                      a musician?
                    </p>
                    <p class="exx__txt-translation">Чому він музикант?</p>
                  </div>
                </div>
                <div class="exx__item">
                  <div class="exx__item-part">
                    <p class="exx__txt-original"><span class="exx__color-incidental">I </span> am a musician.</p>
                    <p class="exx__txt-translation">Я (є) музикант.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original"><span class="exx__color-incidental">I</span> am not a musician.</p>
                    <p class="exx__txt-translation">Я не музикант.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Am <span class="exx__color-incidental">I</span> a musician?
                    </p>
                    <p class="exx__txt-translation">Я музикант?</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Why am
                      <span class="exx__color-incidental">I</span>
                      a musician?
                    </p>
                    <p class="exx__txt-translation">Чому я музикант?</p>
                  </div>
                </div>
                <div class="exx__item">
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">We</span>
                      are musicians.
                    </p>
                    <p class="exx__txt-translation">Ми музиканти.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">We</span>
                      are not musicians.
                    </p>
                    <p class="exx__txt-translation">Ми не музиканти.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Are
                      <span class="exx__color-incidental">we </span>
                      musicians?
                    </p>
                    <p class="exx__txt-translation">Ми музиканти?</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Why are
                      <span class="exx__color-incidental">we </span>
                      musicians?
                    </p>
                    <p class="exx__txt-translation">Чому ми музиканти?</p>
                  </div>
                </div>
              </div>
              <br>

              <table class="table table__in-td">
                <thead>
                  <tr>
                    <th></th>
                    <th colspan="2">OTHER VERBS</th>
                  </tr>
                  <tr>
                    <th></th>
                    <th>He, she, it</th>
                    <th>I, you, we, they</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Affirmative</td>
                    <td>Vs</td>
                    <td>V</td>
                  </tr>
                  <tr>
                    <td>Negative</td>
                    <td>Does not (doesn’t) + V</td>
                    <td>Do not (don’t) + V</td>
                  </tr>
                  <tr>
                    <td>Question</td>
                    <td>Does + she + V?</td>
                    <td>Do + they + V?</td>
                  </tr>
                  <tr>
                    <td>Wh-question</td>
                    <td>Where does + she + V?</td>
                    <td>Where do + they + V?</td>
                  </tr>
                </tbody>
              </table>
              <div class="exx">
                <div class="exx__item">
                  <div class="exx__item-part">
                    <p class="exx__txt-original"><span class="exx__color-incidental">He</span> eats sweets every day.
                    </p>
                    <p class="exx__txt-translation">Він їсть солодощі щодня.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original"><span class="exx__color-incidental">He</span> doesn't eat sweets every
                      day.</p>
                    <p class="exx__txt-translation">Він не Їсть солодощі кожного дня.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">Does <span class="exx__color-incidental">he</span> eat sweets every
                      day?</p>
                    <p class="exx__txt-translation">Він Їсть солодощі кожного дня?</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">Why does <span class="exx__color-incidental">he</span> eat sweets every
                      day?</p>
                    <p class="exx__txt-translation">Чому він їсть солодощі кожного дня?</p>
                  </div>
                </div>
                <div class="exx__item">
                  <div class="exx__item-part">
                    <p class="exx__txt-original"><span class="exx__color-incidental">I</span> eat sweets every day.</p>
                    <p class="exx__txt-translation">Я їм солодощі кожного дня.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original"><span class="exx__color-incidental">I</span> don't eat sweets every day
                    </p>
                    <p class="exx__txt-translation">Я не їм солодощі кожного дня</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">Do <span class="exx__color-incidental">I</span> eat sweets every day?
                    </p>
                    <p class="exx__txt-translation">Я їм солодощі кожного дня?</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">Why do <span class="exx__color-incidental">I</span> eat sweets every
                      day?</p>
                    <p class="exx__txt-translation">Чому я їм солодощі кожного дня?</p>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <table class="table table__in-td">
                <thead>
                  <tr>
                    <th></th>
                    <th>He, she, it</th>
                    <th>I</th>
                    <th>You, we, they</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Affirmative</td>
                    <td>Is (’s) + Ving</td>
                    <td>Am (I’m) + Ving</td>
                    <td>Are (’re) + Ving</td>
                  </tr>
                  <tr>
                    <td>Negative</td>
                    <td>Is not (isn’t) + Ving</td>
                    <td>Am not (I’m not) + Ving</td>
                    <td>Are not (aren’t) + Ving</td>
                  </tr>
                  <tr>
                    <td>Question</td>
                    <td>Is + she + Ving?</td>
                    <td>Am + I + Ving?</td>
                    <td>Are + you + Ving?</td>
                  </tr>
                  <tr>
                    <td>Wh-question</td>
                    <td>Where is + she + Ving?</td>
                    <td>Where am + I + Ving?</td>
                    <td>Where are + you + Ving?</td>
                  </tr>
                </tbody>
              </table>
              <div class="exx">
                <div class="exx__item">
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">He </span>
                      is eating sweets now.
                    </p>
                    <p class="exx__txt-translation">Він їсть солодощі зараз.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">He </span>
                      is not eating sweets now.
                    </p>
                    <p class="exx__txt-translation">Він не їсть солодощі зараз.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Is
                      <span class="exx__color-incidental">he </span>
                      eating sweets now?
                    </p>
                    <p class="exx__txt-translation">Він їсть солодощі зараз?</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Why is
                      <span class="exx__color-incidental">he </span>
                      eating sweets now?
                    </p>
                    <p class="exx__txt-translation">Чому він їсть солодощі зараз?</p>
                  </div>
                </div>

                <div class="exx__item">
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">I </span>
                      am eating sweets now.
                    </p>
                    <p class="exx__txt-translation">Я їм солодощі зараз.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">I </span>
                      am not eating sweets right now.
                    </p>
                    <p class="exx__txt-translation">Я не їм солодощі зараз.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Am
                      <span class="exx__color-incidental">I </span>
                      eating sweets now?
                    </p>
                    <p class="exx__txt-translation">Я їм солодощі зараз?</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Why am
                      <span class="exx__color-incidental">I </span>
                      eating sweets now?
                    </p>
                    <p class="exx__txt-translation">Чому я їм солодощі зараз?</p>
                  </div>
                </div>
                <div class="exx__item">
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">We </span>
                      are eating sweets now.
                    </p>
                    <p class="exx__txt-translation">Ми їмо солодощі зараз.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">We </span>
                      are not eating sweets now.
                    </p>
                    <p class="exx__txt-translation">Ми не їмо солодощі зараз.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Are
                      <span class="exx__color-incidental">we </span>
                      eating sweets now?
                    </p>
                    <p class="exx__txt-translation">Ми їмо солодощі зараз?</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Why are
                      <span class="exx__color-incidental">we </span>
                      eating sweets now?
                    </p>
                    <p class="exx__txt-translation">Чому ми їмо солодощі зараз?</p>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <table class="table table__in-td">
                <thead>
                  <tr>
                    <th></th>
                    <th>He, she, it</th>
                    <th>I, you, we, they</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Affirmative</td>
                    <td>Has (’s) + V3 / Ved</td>
                    <td>Have (’ve) + V3 / Ved</td>
                  </tr>
                  <tr>
                    <td>Negative</td>
                    <td>Has not (hasn’t) + V3 / Ved</td>
                    <td>Have not (haven’t) + V3 / Ved</td>
                  </tr>
                  <tr>
                    <td>Question</td>
                    <td>Has + she + V3 / Ved?</td>
                    <td>Have + they + V3 / Ved?</td>
                  </tr>
                  <tr>
                    <td>Wh-question</td>
                    <td>Where has + she + V3 / Ved?</td>
                    <td>Where have + they + V3 / Ved?</td>
                  </tr>
                </tbody>
              </table>
              <div class="exx">
                <div class="exx__item">
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">He </span>
                      has ate sweets so he is very satisfied.
                    </p>
                    <p class="exx__txt-translation">Він їв солодощі, тому дуже задоволений.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">He </span>
                      has not ate sweets, so he is very satisfied.
                    </p>
                    <p class="exx__txt-translation">Він не їв солодощі, тому дуже задоволений.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Has
                      <span class="exx__color-incidental">he </span>
                      ate sweets, so he is very satisfied?
                    </p>
                    <p class="exx__txt-translation">Він їв солодощі, тому дуже задоволений?</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Why has
                      <span class="exx__color-incidental">he </span>
                      ate sweets?
                    </p>
                    <p class="exx__txt-translation">Чому він їв солодощі?</p>
                  </div>
                </div>

                <div class="exx__item">
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">I </span>
                      have eaten sweets so I’m satisfied.
                    </p>
                    <p class="exx__txt-translation">Я з’їв солодощі, тож я задоволений.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">I </span>
                      haven't eaten any sweets and I feel very good.
                    </p>
                    <p class="exx__txt-translation">Я не з'їв солодощі і почуваю себе дуже добре.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Have
                      <span class="exx__color-incidental">I </span>
                      eaten any sweets?
                    </p>
                    <p class="exx__txt-translation">Чи я з'їв якісь солодощі?</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      What have
                      <span class="exx__color-incidental">I </span>
                      eaten sweets?
                    </p>
                    <p class="exx__txt-translation">Які солодощі я з'їв?</p>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <table class="table table__in-td">
                <thead>
                  <tr>
                    <th></th>
                    <th>He, she, it</th>
                    <th>I, you, we, they</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Affirmative</td>
                    <td>Has (’s) + been + Ving</td>
                    <td>Have (’ve) + been + Ving</td>
                  </tr>
                  <tr>
                    <td>Negative</td>
                    <td>Has not (hasn’t) + been + Ving</td>
                    <td>Have not (haven’t) + been + Ving</td>
                  </tr>
                  <tr>
                    <td>Question</td>
                    <td>Has + she + been + Ving?</td>
                    <td>Have + they + been + Ving?</td>
                  </tr>
                  <tr>
                    <td>Wh-question</td>
                    <td>Where has + she + been + Ving?</td>
                    <td>Where have + they + been + Ving? </td>
                  </tr>
                </tbody>
              </table>
              <div class="exx">
                <div class="exx__item">
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">He </span>
                      has been eating sweets for 10 years.
                    </p>
                    <p class="exx__txt-translation">Він їсть солодощі вже протягом 10 років.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">He </span>
                      has not been eating sweets for 10 years.
                    </p>
                    <p class="exx__txt-translation">Він не їсть солодкого вже 10 років.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Has
                      <span class="exx__color-incidental">he </span>
                      been eating sweets for 10 years?
                    </p>
                    <p class="exx__txt-translation">Він їсть солодощі вже 10 років?</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Why has
                      <span class="exx__color-incidental">he </span>
                      been eating sweets for 10 years?
                    </p>
                    <p class="exx__txt-translation">Чому він їсть солодощі вже 10 років?</p>
                  </div>
                </div>
                <div class="exx__item">
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">I </span>
                      have been eating sweets for 10 years.
                    </p>
                    <p class="exx__txt-translation">Я їм солодощі вже протягом 10 років.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">I </span>
                      have not been eating sweets for 10 years.
                    </p>
                    <p class="exx__txt-translation">Я не їм солодкого вже 10 років.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Have
                      <span class="exx__color-incidental">I </span>
                      been eating sweets for 10 years?
                    </p>
                    <p class="exx__txt-translation">Я їм солодощі вже 10 років?</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Why have
                      <span class="exx__color-incidental">I </span>
                      been eating sweets for 10 years?
                    </p>
                    <p class="exx__txt-translation">Чому я їм солодощі вже 10 років?</p>
                  </div>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td scope="row">Past</td>
            <td>
              <table class="table table__in-td">
                <thead>
                  <tr>
                    <th></th>
                    <th colspan="2">TO BE</th>
                  </tr>
                  <tr>
                    <th></th>
                    <th>He, she, it</th>
                    <th>I, you, we, they</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Affirmative</td>
                    <td>Was</td>
                    <td>Were</td>
                  </tr>
                  <tr>
                    <td>Negative</td>
                    <td>Was not (wasn’t)</td>
                    <td>Were not (weren’t)</td>
                  </tr>
                  <tr>
                    <td>Question</td>
                    <td>Was she?</td>
                    <td>Were you?</td>
                  </tr>
                  <tr>
                    <td>Wh-question</td>
                    <td>Where was she?</td>
                    <td>Where were you?</td>
                  </tr>
                </tbody>
              </table>
              <div class="exx">
                <div class="exx__item">
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">He </span>
                      was a musician.
                    </p>
                    <p class="exx__txt-translation">Він був музикантом.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">He </span>
                      was not a musician.
                    </p>
                    <p class="exx__txt-translation">Він не був музикантом.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Was
                      <span class="exx__color-incidental">he </span>
                      a musician?
                    </p>
                    <p class="exx__txt-translation">Він був музикантом?</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Why was
                      <span class="exx__color-incidental">he </span>
                      a musician?
                    </p>
                    <p class="exx__txt-translation">Чому він був музикантом?</p>
                  </div>
                </div>

                <div class="exx__item">
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">We </span>
                      were musicians.
                    </p>
                    <p class="exx__txt-translation">Ми були музикантами.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">We </span>
                      weren't musicians.
                    </p>
                    <p class="exx__txt-translation">Ми не були музикантами.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Were
                      <span class="exx__color-incidental">we </span>
                      musicians?
                    </p>
                    <p class="exx__txt-translation">Ми були музикантами?</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Why were
                      <span class="exx__color-incidental">we </span>
                      musicians?
                    </p>
                    <p class="exx__txt-translation">Чому ми були музикантами?</p>
                  </div>
                </div>

              </div>
              <br>

              <table class="table table__in-td">
                <thead>
                  <tr>
                    <th></th>
                    <th>OTHER VERBS</th>
                  </tr>
                  <tr>
                    <th></th>
                    <th>He, she, it, I, you, we, they</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Affirmative</td>
                    <td>Ved / V2</td>
                  </tr>
                  <tr>
                    <td>Negative</td>
                    <td>Did not (didn’t) + V</td>
                  </tr>
                  <tr>
                    <td>Question</td>
                    <td>Did + she + V?</td>
                  </tr>
                  <tr>
                    <td>Wh-question</td>
                    <td>Where did + she + V?</td>
                  </tr>
                </tbody>
              </table>
              <div class="exx">
                <div class="exx__item">
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">I </span>
                      ate sweets yesterday.
                    </p>
                    <p class="exx__txt-translation">Я їв солодощі вчора.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">I </span>
                      did not eat sweets yesterday.
                    </p>
                    <p class="exx__txt-translation">Я вчора не їв солодощів.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Did
                      <span class="exx__color-incidental">I </span>
                      eat sweets yesterday?
                    </p>
                    <p class="exx__txt-translation">Я вчора їв солодощі?</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Where did
                      <span class="exx__color-incidental">I </span>
                      eat sweets yesterday?
                    </p>
                    <p class="exx__txt-translation">Де я вчора їв солодощі?</p>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <table class="table table__in-td">
                <thead>
                  <tr>
                    <th></th>
                    <th>I, he, she, it</th>
                    <th>You, we, they</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Affirmative</td>
                    <td>Was + Ving</td>
                    <td>Were + Ving</td>
                  </tr>
                  <tr>
                    <td>Negative</td>
                    <td>Was not (wasn’t) + Ving</td>
                    <td>Were not (weren’t) + Ving</td>
                  </tr>
                  <tr>
                    <td>Question</td>
                    <td>Was + she + Ving?</td>
                    <td>Were + you + Ving?</td>
                  </tr>
                  <tr>
                    <td>Wh-question</td>
                    <td>Where was + she + Ving?</td>
                    <td>Where were + you + Ving?</td>
                  </tr>
                </tbody>
              </table>
              <div class="exx">
                <div class="exx__item">
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">I </span>
                      was eating sweets yesterday from 6 to 8 pm.
                    </p>
                    <p class="exx__txt-translation">Я їв солодощі вчора з 6 до 8 вечора.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">I </span>
                      was not eating sweets yesterday from 6 to 8 pm.
                    </p>
                    <p class="exx__txt-translation">Я не їв солодкого вчора з 18:00 до 20:00.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Was
                      <span class="exx__color-incidental">I </span>
                      eating sweets yesterday from 6 to 8 pm?
                    </p>
                    <p class="exx__txt-translation">Я їв солодощі вчора з 18:00 до 20:00?</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Where was
                      <span class="exx__color-incidental">I </span>
                      eating sweets yesterday from 6 to 8 pm?
                    </p>
                    <p class="exx__txt-translation">Де я їв солодощі вчора з 18:00 до 20:00?</p>
                  </div>
                </div>

                <div class="exx__item">
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">We </span>
                      were eating sweets yesterday from 6 to 8 pm.
                    </p>
                    <p class="exx__txt-translation">Ми їли солодощі вчора з 18:00 до 20:00.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">We </span>
                      were not eating sweets yesterday from 6 to 8 pm.
                    </p>
                    <p class="exx__txt-translation">Ми не їли солодощів вчора з 18:00 до 20:00.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Were
                      <span class="exx__color-incidental">we </span>
                      eating sweets yesterday from 6 to 8 pm?
                    </p>
                    <p class="exx__txt-translation">Ми їли солодощі вчора з 18:00 до 20:00?</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Where were
                      <span class="exx__color-incidental">we </span>
                      eating sweets yesterday from 6 to 8 pm?
                    </p>
                    <p class="exx__txt-translation">Де ми їли солодощі вчора з 18:00 до 20:00?</p>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <table class="table table__in-td">
                <thead>
                  <tr>
                    <th></th>
                    <th>He, she, it, I, you, we, they</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Affirmative</td>
                    <td>Had + V3 / Ved</td>
                  </tr>
                  <tr>
                    <td>Negative</td>
                    <td>Had not (hadn’t) + V3 / Ved</td>
                  </tr>
                  <tr>
                    <td>Question</td>
                    <td>Had + she + V3 / Ved?</td>
                  </tr>
                  <tr>
                    <td>Wh-question</td>
                    <td>Where had + she + V3 / Ved?</td>
                  </tr>
                </tbody>
              </table>
              <div class="exx">
                <div class="exx__item">
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">I </span>
                      had eaten sweets last summer so I was happy.
                    </p>
                    <p class="exx__txt-translation">Я їла солодощі минулого літа, тож була щаслива.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">I </span>
                      had not eaten sweets last summer, so I was happy.
                    </p>
                    <p class="exx__txt-translation">Я не їла солодощів минулого літа, тому була щаслива.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Had
                      <span class="exx__color-incidental">I </span>
                      eaten sweets last summer and was I happy?
                    </p>
                    <p class="exx__txt-translation">Я їла солодощі минулого літа і була щаслива?</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Where had
                      <span class="exx__color-incidental">I </span>
                      eaten sweets last summer and I was happy?
                    </p>
                    <p class="exx__txt-translation">Де я їла солодощі минулого літа і була щаслива?</p>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <table class="table table__in-td">
                <thead>
                  <tr>
                    <th></th>
                    <th>He, she, it, I, you, we, they</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Affirmative</td>
                    <td>Had (’d) + been + Ving</td>
                  </tr>
                  <tr>
                    <td>Negative</td>
                    <td>Had not (hadn’t) + been + Ving</td>
                  </tr>
                  <tr>
                    <td>Question</td>
                    <td>Had + they + been + Ving?</td>
                  </tr>
                  <tr>
                    <td>Wh-question</td>
                    <td>Where had + they + been + Ving ?</td>
                  </tr>
                </tbody>
              </table>
              <div class="exx">
                <div class="exx__item">
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">I </span>
                      had been working for an hour when he came.
                    </p>
                    <p class="exx__txt-translation">Я пропрацював з годину до того, як він прийшов.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">I </span>
                      hadn't been working for an hour when he came.
                    </p>
                    <p class="exx__txt-translation">Я не пропрацював з (цілу) годину, коли він прийшов.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Had
                      <span class="exx__color-incidental">I </span>
                      been working for an hour when he came?
                    </p>
                    <p class="exx__txt-translation">Я вже пропрацював з (цілу) годину, коли він прийшов?</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Where had
                      <span class="exx__color-incidental">I </span>
                      been working for an hour when he came?
                    </p>
                    <p class="exx__txt-translation">Де я працював цілу годину, коли він прийшов?</p>
                  </div>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td scope="row">Future</td>
            <td>
              <table class="table table__in-td">
                <thead>
                  <tr>
                    <th></th>
                    <th>He, she, it, I, you, we, they</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Affirmative</td>
                    <td>Will + V</td>
                  </tr>
                  <tr>
                    <td>Negative</td>
                    <td>Will not (won’t) + V</td>
                  </tr>
                  <tr>
                    <td>Question</td>
                    <td>Will + she + V?</td>
                  </tr>
                  <tr>
                    <td>Wh-question</td>
                    <td>Where will + she + V?</td>
                  </tr>
                </tbody>
              </table>
              <div class="exx">
                <div class="exx__item">
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">You </span>
                      will work tomorrow.
                    </p>
                    <p class="exx__txt-translation">Ви будете працювати завтра.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">You </span>
                      won't work tomorrow.
                    </p>
                    <p class="exx__txt-translation">Ви не будете працювати завтра.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Will
                      <span class="exx__color-incidental">you </span>
                      work tomorrow?
                    </p>
                    <p class="exx__txt-translation">Ви будете працювати завтра?</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Where will
                      <span class="exx__color-incidental">you </span>
                      work tomorrow?
                    </p>
                    <p class="exx__txt-translation">Де ти працюватимеш завтра?</p>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <table class="table table__in-td">
                <thead>
                  <tr>
                    <th></th>
                    <th>He, she, it, I, you, we, they</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Affirmative</td>
                    <td>Will + be + Ving</td>
                  </tr>
                  <tr>
                    <td>Negative</td>
                    <td>Will not (won’t) + be + Ving</td>
                  </tr>
                  <tr>
                    <td>Question</td>
                    <td>Will + she + be + Ving?</td>
                  </tr>
                  <tr>
                    <td>Wh-question</td>
                    <td>Where will + she + be + Ving?</td>
                  </tr>
                </tbody>
              </table>
              <div class="exx">
                <div class="exx__item">
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">You </span>
                      will be working at eight o'clock.
                    </p>
                    <p class="exx__txt-translation">Ви будете працювати о 8-й годині.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">You </span>
                      won't be working at eight o'clock.
                    </p>
                    <p class="exx__txt-translation">Ви не будете працювати о 8-й годині.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Will
                      <span class="exx__color-incidental">you </span>
                      be working at eight o'clock?
                    </p>
                    <p class="exx__txt-translation">Ви будете працювати о 8-ій годині?</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Where will
                      <span class="exx__color-incidental">you </span>
                      be working at eight o'clock?
                    </p>
                    <p class="exx__txt-translation">Де ви будете працювати о восьмій годині?</p>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <table class="table table__in-td">
                <thead>
                  <tr>
                    <th></th>
                    <th>He, she, it, I, you, we, they</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Affirmative</td>
                    <td>Will + have + V3 / Ved</td>
                  </tr>
                  <tr>
                    <td>Negative</td>
                    <td>Will not (won’t) + have + V3 / Ved</td>
                  </tr>
                  <tr>
                    <td>Question</td>
                    <td>Will + she + have + V3 / Ved?</td>
                  </tr>
                  <tr>
                    <td>Wh-question</td>
                    <td>When will + she + have + V3 / Ved?</td>
                  </tr>
                </tbody>
              </table>
              <div class="exx">
                <div class="exx__item">
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">I </span>
                      will have done this work by 5 o’clock tomorrow.
                    </p>
                    <p class="exx__txt-translation">Я виконаю цю роботу до 5-ї години завтра.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">I </span>
                      will not have done this work by 5 o’clock tomorrow.
                    </p>
                    <p class="exx__txt-translation">Я не виконаю цю роботу до 5-ї години завтра.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Will
                      <span class="exx__color-incidental">I </span>
                      have done this work by 5 o’clock tomorrow?
                    </p>
                    <p class="exx__txt-translation">Я виконаю цю роботу до 5-ї години завтра?</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      What will
                      <span class="exx__color-incidental">I </span>
                      have done by 5 o’clock tomorrow?
                    </p>
                    <p class="exx__txt-translation">Що я виконаю до 5-ї години завтра?</p>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <table class="table table__in-td">
                <thead>
                  <tr>
                    <th></th>
                    <th>He, she, it, I, you, we, they</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Affirmative</td>
                    <td>Will (’ll) + have been + Ving</td>
                  </tr>
                  <tr>
                    <td>Negative</td>
                    <td>Will not (won’t) + have been + Ving</td>
                  </tr>
                  <tr>
                    <td>Question</td>
                    <td>Will + they + have been + Ving?</td>
                  </tr>
                  <tr>
                    <td>Wh-question</td>
                    <td>Where will + they + have been + Ving ?</td>
                  </tr>
                </tbody>
              </table>
              <div class="exx">
                <div class="exx__item">
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">I </span>
                      will have been driving for 2 hours before the moment we reach New York.
                    </p>
                    <p class="exx__txt-translation">Я буду (вже) їхати дві години до того моменту, коли ми доїдемо до
                      Нью-Йорка.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      <span class="exx__color-incidental">I </span>
                      will not have been driving for 2 hours before the moment we reach New York.
                    </p>
                    <p class="exx__txt-translation">Я не буду їхати дві години до того моменту, коли ми доїдемо до
                      Нью-Йорка.</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      Will
                      <span class="exx__color-incidental">I </span>
                      have been driving for 2 hours before the moment we reach New York?
                    </p>
                    <p class="exx__txt-translation">Чи буду я їхати протягом двох годин до того часу, коли ми доберемося
                      до Нью-Йорка?</p>
                  </div>
                  <div class="exx__item-part">
                    <p class="exx__txt-original">
                      How long will
                      <span class="exx__color-incidental">I </span>
                      have been driving before the moment we reach New York?
                    </p>
                    <p class="exx__txt-translation">Як довго я буду їхати до того моменту як ми досягнемо Нью-Йорка?</p>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Dialog>
</template>

<script>
import Dialog from "../components/Dialog.vue";
export default {
  name: "Table2",
  components: {
    Dialog,
  },
  data() {
    return {
      allowInitResize: true,
      wrapTableClass: "",
      resizeTimeoutID: null,
      activeDialog: false,
    };
  },
  mounted() {
    this.init();
    window.addEventListener("resize", () => {
      if (this.allowInitResize) {
        this.allowInitResize = false;
        clearTimeout(this.resizeTimeoutID);
        this.resizeTimeoutID = setTimeout(() => {
          this.init();
          this.allowInitResize = true;
        }, 1000);
      }
    });
  },
  updated() {
    this.init();
  },
  unmounted() {
    window.removeEventListener("resize", this.init);
  },
  methods: {
    init() {
      let wrap = this.$refs.wrapRef;
      if (wrap) {
        let table = this.$refs.tableRef;
        if (table.offsetHeight > wrap.offsetHeight) {
          this.wrapTableClass = "wrap-table--with-scrollbar";
        } else {
          this.wrapTableClass = "wrap-table--without-scrollbar";
        }
      }
    },
    showDialog() {
      this.activeDialog = true;
    },
    closeDialog() {
      this.activeDialog = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/vars.scss";

.table-txt {
  margin-bottom: 25px;

  &__ul {
    margin-bottom: 25px;
    list-style-type: circle;
    padding-left: 18px;
  }

  & p {
    margin-bottom: 10px;
  }
}

.table-title {
  margin-bottom: 5px;
  font-style: italic;
  font-weight: bold;
}

ul ul {
  padding-left: 20px;
}

li {
  padding: 2px 0;
}

////////////////////////
.wrap-table {
  border-bottom: 1px solid;
  overflow: auto;
  max-width: fit-content;
  max-height: 90vh;
  scrollbar-width: thin;
  scrollbar-color: #ccc rgb(241, 239, 239);

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgb(241, 239, 239);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 20px;
  }

  background: linear-gradient(to right, #fff 30%, rgba(255, 255, 255, 0)),
  linear-gradient(to right, rgba(255, 255, 255, 0), #fff 70%) 0 100%,
  radial-gradient(farthest-side at 0% 50%,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0)),
  linear-gradient(90deg,
    rgba(255, 255, 255, 1) 92%,
    rgb(225 227 230) 95%,
    rgba(173, 176, 180, 1) 98%,
    rgba(144, 144, 148, 1) 99%);
  background-repeat: no-repeat;
  background-color: #fff;
  background-position: 0 0,
  100%,
  0 0,
  100% 100%;
  background-attachment: local,
  local,
  scroll,
  scroll;

  &--with-scrollbar {
    background-size: 40px 100%, 40px 100%, 14px 100%, 450px 100%;
  }

  &--without-scrollbar {
    background-size: 40px 100%, 40px 100%, 14px 100%, 170px 100%;
  }
}

.table {
  border-spacing: 0;
  border-collapse: initial;
  margin: 0;
  color: #000;

  --border-cells: 1px solid #000;
}

.table th,
.table td {
  padding: 5px;
  vertical-align: top;
  white-space: nowrap;
}

.table th {
  background-color: #666;
  color: #fff;
  text-align: center;
}

.table tr:nth-child(even) td[scope="row"] {
  background-color: #e5e5e5;
}

.table tr:nth-child(odd) td[scope="row"] {
  background-color: rgba(255, 255, 255, 1);
}

.table tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.1);
}

.table tr:nth-child(odd) {
  background-color: rgba(255, 255, 255, 0);
}

/* Fixed Headers, cells start */
thead.t-head-fixed {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: map-get($zindex, t_head_fixed);
}

td[scope="row"],
th[scope="row"] {
  position: -webkit-sticky;
  position: sticky;
  left: 0;
  z-index: map-get($zindex, scope_row);
}

td[scope="row"]::after,
th[scope="row"]::after {
  content: "";
  position: absolute;
  top: 0;
  right: -4px;
  bottom: 0;
  width: 4px;
  background-color: green;
}

/* Fixed Headers, cells end */

// border cells start-----------------------------------------------------------------
.table tr:first-child th[scope="row"] {
  border: var(--border-cells);
}

.table tr:first-child th {
  border-left: var(--border-cells);
  border-top: var(--border-cells);
  border-bottom: var(--border-cells);
  border-right: none;
}

.table tr:first-child th[scope="row"]~th {
  border-left: none;
  border-top: var(--border-cells);
  border-bottom: var(--border-cells);
  border-right: var(--border-cells);
}

.table tr:first-child th[scope="row"]~th:last-child {
  border-right: none;
}

.table tr:first-child th:last-child {
  border-right: var(--border-cells) !important;
}

// --------
.table tr th[scope="row"] {
  border-left: var(--border-cells);
  border-top: none;
  border-bottom: var(--border-cells);
  border-right: var(--border-cells);
}

.table tr th {
  border-left: var(--border-cells);
  border-top: none;
  border-bottom: var(--border-cells);
  border-right: none;
}

.table tr th[scope="row"]~th {
  border-left: none;
  border-top: none;
  border-bottom: var(--border-cells);
  border-right: var(--border-cells);
}

.table tr th[scope="row"]~th:last-child {
  border-right: none;
}

.table tr th:last-child {
  border-right: var(--border-cells) !important;
}

.table tr td[scope="row"] {
  border: var(--border-cells);
  border-top: none;
}

.table tr td {
  border-left: var(--border-cells);
  border-bottom: var(--border-cells);
}

.table tr td[scope="row"]~td {
  border-left: none;
  border-bottom: var(--border-cells);
  border-right: var(--border-cells);
}

.table tr td[scope="row"]~td:last-child {
  border-right: none;
}

.table tr td:last-child {
  border-right: var(--border-cells) !important;
}

//border cells end----------------------------------------------------

.dark .wrap-table {
  filter: invert(100) hue-rotate(180deg);
}

.table__in-td {
  width: 100%;
  margin-bottom: 5px;
}

.exx {
  &__item {
    padding: 0 5px 5px 5px;
    font-size: 14px;
  }

  &__item:nth-child(odd) {
    background-color: #f6f7fb;
  }

  &__item:nth-child(even) {
    background-color: #e4e8f1;
  }

  &__item-part {
    padding-bottom: 6px;
  }

  &__txt-original {
    font-weight: bold;
  }

  &__txt-translation {
    color: #A1A6BB;
  }

  &__color-incidental {
    color: #EB4E36;
  }
}

.btn-show-table {
  padding: 6px 15px;
  background-color: #f9f7e8;
  color: #62BFAD;
  font-weight: bold;
}
</style>