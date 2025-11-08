import React from "react";

export default function IsErrorInFishPriceTable({
  IsError,
}: {
  IsError: boolean;
}) {
  if (IsError) {
    return (
      <div
        className="bg-card rounded-lg border border-border overflow-hidden"
        data-testid="fish-table-error"
      >
        <div className="p-8 text-center">
          <span className="text-destructive">Failed to load fish prices</span>
        </div>
      </div>
    );
  }
}
