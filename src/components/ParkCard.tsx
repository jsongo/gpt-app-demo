import React from 'react';
import { Badge } from '@openai/apps-sdk-ui/components/Badge';
import { Image } from '@openai/apps-sdk-ui/components/Image';
import { MapPin } from '@openai/apps-sdk-ui/components/Icon';
import { ParkItem } from '../data';

interface ParkCardProps {
  park: ParkItem;
}

export const ParkCard: React.FC<ParkCardProps> = ({ park }) => {
  return (
    <div className="flex-none w-[300px] snap-center">
      <div className="h-full overflow-hidden rounded-3xl border border-default bg-surface shadow-lg flex flex-col transition-all hover:shadow-xl">
        {/* Image Container with fixed aspect ratio */}
        <div className="relative w-full aspect-[3/2] overflow-hidden border-b border-subtle">
          <Image
            src={park.imageUrl}
            alt={park.name}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content Container */}
        <div className="p-5 flex flex-col gap-3">
          <div className="flex flex-wrap gap-2">
            {park.tags.map((tag, idx) => (
              <Badge
                key={idx}
                pill
                variant="soft"
                color="secondary"
                size="sm"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex flex-col gap-1">
            <h2 className="heading-lg text-primary line-clamp-1">
              {park.name}
            </h2>
            <div className="flex items-center gap-1.5 text-secondary text-xs font-medium">
              <MapPin className="size-3" />
              <span>中国 · 深圳</span>
            </div>
          </div>

          <p className="text-secondary text-sm line-clamp-2 min-h-[40px] leading-relaxed">
            {park.description}
          </p>
        </div>
      </div>
    </div>
  );
};
