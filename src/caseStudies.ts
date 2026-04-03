import React from 'react';
import SlimeMouldCaseStudy from './projects/SlimeMouldCaseStudy';
import BalikBakawanCaseStudy from './projects/BalikBakawanCaseStudy';

export const CaseStudyComponents: Record<string, React.FC> = {
  "slime_mould": SlimeMouldCaseStudy,
  "balik_bakawan": BalikBakawanCaseStudy,
};
