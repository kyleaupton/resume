// @ts-ignore
import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import workExperience from '@/data/work-experience';
import type { Company } from '@/data/work-experience';
import CustomLink from '@/components/Link';
import { s, colors } from './styles';

function CompanySection({ company }: { company: Company }) {
  const renderedPositions = company.positions.default.map((position) => {
    const renderedPoints = position.points.map((point) => (
      <View key={point} style={{ flexDirection: 'row', gap: 4, paddingLeft: 12, paddingRight: 12 }}>
        <Text>•</Text>
        <Text>{point}</Text>
      </View>
    ));

    return (
      <View key={position.title}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 2,
          }}
        >
          <Text style={[s.titleSm]}>{position.title}</Text>
          <Text style={[s.textSm, s.textMuted]}>{position.date}</Text>
        </View>

        <View style={{ gap: 3 }}>
          {renderedPoints}
        </View>
      </View>
    );
  });

  return (
    <View style={{ gap: 6 }}>
      <View>
        <CustomLink
          text={company.name}
          url={company.companyUrl}
          textStyle={[s.titleSm, { fontSize: 11 }]}
        />
      </View>

      <View style={{ gap: 6 }}>
        {renderedPositions}
      </View>
    </View>
  );
}

export default function WorkExperience() {
  return (
    <View style={{ gap: 10 }}>
      <CompanySection company={workExperience.redOak} />
      <CompanySection company={workExperience.digitalGlue} />
    </View>
  );
}
