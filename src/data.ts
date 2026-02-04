export interface ParkItem {
  id: string;
  name: string;
  description: string;
  feature: string;
  imageUrl: string;
  tags: string[];
}

export const rawData = [
  {
    beginRendering: {
      surfaceId: "park_cards",
      root: "root",
    },
  },
  {
    surfaceUpdate: {
      surfaceId: "park_cards",
      components: [
        {
          id: "root",
          component: {
            Column: {
              children: {
                explicitList: ["row_1", "row_2", "row_3"],
              },
            },
          },
        },
        {
          id: "row_1",
          component: {
            Row: {
              children: {
                explicitList: ["park_1", "park_2"],
              },
            },
          },
        },
        {
          id: "row_2",
          component: {
            Row: {
              children: {
                explicitList: ["park_3", "park_4"],
              },
            },
          },
        },
        {
          id: "row_3",
          component: {
            Row: {
              children: {
                explicitList: ["park_5"],
              },
            },
          },
        },
        {
          id: "park_1",
          component: { Card: { child: "park_1_content" } },
        },
        {
          id: "park_1_content",
          component: {
            Column: {
              children: {
                explicitList: [
                  "park_1_image",
                  "park_1_name",
                  "park_1_desc",
                  "park_1_feature",
                ],
              },
            },
          },
        },
        {
          id: "park_1_image",
          component: {
            Image: {
              url: {
                literalString:
                  "https://cdn.lyb.pub/upic/1770038132_4BMIeB.jpeg",
              },
              width: 300,
              height: 200,
            },
          },
        },
        {
          id: "park_1_name",
          component: {
            Text: { text: { literalString: "深圳湾公园" }, usageHint: "h2" },
          },
        },
        {
          id: "park_1_desc",
          component: {
            Text: {
              text: {
                literalString:
                  "深圳湾公园位于深圳市南山区，是深圳最大的海滨公园",
              },
            },
          },
        },
        {
          id: "park_1_feature",
          component: {
            Text: {
              text: {
                literalString: "特色：15公里滨海长廊，观鸟胜地，日落绝佳点",
              },
            },
          },
        },
        {
          id: "park_2",
          component: { Card: { child: "park_2_content" } },
        },
        {
          id: "park_2_content",
          component: {
            Column: {
              children: {
                explicitList: [
                  "park_2_image",
                  "park_2_name",
                  "park_2_desc",
                  "park_2_feature",
                ],
              },
            },
          },
        },
        {
          id: "park_2_image",
          component: {
            Image: {
              url: {
                literalString:
                  "https://cdn.lyb.pub/upic/1770038198_LVRmAU.jpeg",
              },
              width: 300,
              height: 200,
            },
          },
        },
        {
          id: "park_2_name",
          component: {
            Text: { text: { literalString: "深圳人才公园" }, usageHint: "h2" },
          },
        },
        {
          id: "park_2_desc",
          component: {
            Text: {
              text: {
                literalString:
                  "深圳人才公园地处南山区后海片区，毗邻粤港澳大湾区和深圳湾超级总部基地",
              },
            },
          },
        },
        {
          id: "park_2_feature",
          component: {
            Text: {
              text: {
                literalString:
                  '特色：全国首个"人才"主题公园，星光桥、π桥，科技名人雕塑',
              },
            },
          },
        },
        {
          id: "park_3",
          component: { Card: { child: "park_3_content" } },
        },
        {
          id: "park_3_content",
          component: {
            Column: {
              children: {
                explicitList: [
                  "park_3_image",
                  "park_3_name",
                  "park_3_desc",
                  "park_3_feature",
                ],
              },
            },
          },
        },
        {
          id: "park_3_image",
          component: {
            Image: {
              url: { literalString: "https://s.coze.cn/image/rhRAUXkUC-E/" },
              width: 300,
              height: 200,
            },
          },
        },
        {
          id: "park_3_name",
          component: {
            Text: { text: { literalString: "莲花山公园" }, usageHint: "h2" },
          },
        },
        {
          id: "park_3_desc",
          component: {
            Text: {
              text: {
                literalString: '莲花山公园位于深圳市福田区，是深圳的"城市客厅"',
              },
            },
          },
        },
        {
          id: "park_3_feature",
          component: {
            Text: {
              text: {
                literalString:
                  "特色：登顶可俯瞰福田CBD全景，风筝广场，邓小平铜像",
              },
            },
          },
        },
        {
          id: "park_4",
          component: { Card: { child: "park_4_content" } },
        },
        {
          id: "park_4_content",
          component: {
            Column: {
              children: {
                explicitList: [
                  "park_4_image",
                  "park_4_name",
                  "park_4_desc",
                  "park_4_feature",
                ],
              },
            },
          },
        },
        {
          id: "park_4_image",
          component: {
            Image: {
              url: { literalString: "https://s.coze.cn/image/G5E-9BtyyrQ/" },
              width: 300,
              height: 200,
            },
          },
        },
        {
          id: "park_4_name",
          component: {
            Text: { text: { literalString: "仙湖植物园" }, usageHint: "h2" },
          },
        },
        {
          id: "park_4_desc",
          component: {
            Text: {
              text: {
                literalString: '仙湖植物园位于深圳市罗湖区，是深圳的"绿色明珠"',
              },
            },
          },
        },
        {
          id: "park_4_feature",
          component: {
            Text: {
              text: {
                literalString:
                  "特色：12000+种植物，弘法寺，天上人间景区，多肉植物区",
              },
            },
          },
        },
        {
          id: "park_5",
          component: { Card: { child: "park_5_content" } },
        },
        {
          id: "park_5_content",
          component: {
            Column: {
              children: {
                explicitList: [
                  "park_5_image",
                  "park_5_name",
                  "park_5_desc",
                  "park_5_feature",
                ],
              },
            },
          },
        },
        {
          id: "park_5_image",
          component: {
            Image: {
              url: { literalString: "https://s.coze.cn/image/pSSZGti7qTQ/" },
              width: 300,
              height: 200,
            },
          },
        },
        {
          id: "park_5_name",
          component: {
            Text: { text: { literalString: "香蜜公园" }, usageHint: "h2" },
          },
        },
        {
          id: "park_5_desc",
          component: {
            Text: {
              text: {
                literalString: '香蜜公园位于深圳市福田区，是深圳的"浪漫花海"',
              },
            },
          },
        },
        {
          id: "park_5_feature",
          component: {
            Text: {
              text: {
                literalString: "特色：浪漫花海和空中栈道，适合亲子游和情侣约会",
              },
            },
          },
        },
      ],
    },
  },
];

export const parseParkData = (): ParkItem[] => {
  const update = rawData.find((item) => "surfaceUpdate" in item);
  if (!update || !("surfaceUpdate" in update)) return [];

  const components = update.surfaceUpdate.components;
  const parks: ParkItem[] = [];

  // Find all components that are Cards
  const cardComponents = components.filter((c) => "Card" in c.component);

  cardComponents.forEach((card) => {
    const contentId = (card.component as any).Card.child;
    const content = components.find((c) => c.id === contentId);

    if (content && "Column" in content.component) {
      const childrenIds = (content.component as any).Column.children
        .explicitList;
      const children = childrenIds.map((id: string) =>
        components.find((c) => c.id === id),
      );

      const nameComp = children.find((c: any) => c?.id.includes("_name"));
      const descComp = children.find((c: any) => c?.id.includes("_desc"));
      const featureComp = children.find((c: any) => c?.id.includes("_feature"));
      const imageComp = children.find((c: any) => c?.id.includes("_image"));

      const featureText = (featureComp?.component as any).Text.text
        .literalString;
      const tags = featureText
        .replace("特色：", "")
        .split(/[，,]/)
        .map((s: string) => s.trim());

      parks.push({
        id: card.id,
        name: (nameComp?.component as any).Text.text.literalString,
        description: (descComp?.component as any).Text.text.literalString,
        feature: featureText,
        imageUrl: (imageComp?.component as any).Image.url.literalString,
        tags: tags,
      });
    }
  });

  return parks;
};
