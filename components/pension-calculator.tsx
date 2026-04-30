"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "@/lib/language-context";

export function PensionCalculator() {
  const [currentAge, setCurrentAge] = useState("");
  const [salary, setSalary] = useState("");
  const [yearsOfService, setYearsOfService] = useState("");
  const [retirementAge, setRetirementAge] = useState("65");
  const multiplier = 2.3;
  const { t } = useTranslation();

  const handleRetirementAgeChange = (value: string | null) => {
    if (value) setRetirementAge(value);
  };

  const currentAgeNum = parseFloat(currentAge) || 0;
  const salaryNum = parseFloat(salary) || 0;
  const yearsNum = parseFloat(yearsOfService) || 0;
  const retirementAgeNum = parseFloat(retirementAge);
  const additionalYears = Math.max(0, retirementAgeNum - currentAgeNum);
  const totalYears = yearsNum + additionalYears;
  const annualPension = salaryNum * (multiplier / 100) * totalYears;
  const monthlyPension = annualPension / 12;
  const replacementRate = salaryNum > 0 ? (annualPension / salaryNum) * 100 : 0;
  const incomeGap = salaryNum > 0 ? 100 - replacementRate : 0;

  const hasInput = currentAgeNum > 0 && salaryNum > 0;

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>{t.calculator.yourInfo}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="currentAge">{t.calculator.currentAge}</Label>
            <Input
              id="currentAge"
              type="number"
              placeholder={t.calculator.currentAgePlaceholder}
              value={currentAge}
              onChange={(e) => setCurrentAge(e.target.value)}
              min={20}
              max={80}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="salary">{t.calculator.salary}</Label>
            <Input
              id="salary"
              type="number"
              placeholder={t.calculator.salaryPlaceholder}
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              min={0}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="yearsOfService">
              {t.calculator.yearsOfService}
            </Label>
            <Input
              id="yearsOfService"
              type="number"
              placeholder={t.calculator.yearsOfServicePlaceholder}
              value={yearsOfService}
              onChange={(e) => setYearsOfService(e.target.value)}
              min={0}
              max={50}
            />
          </div>

          <div className="space-y-2">
            <Label>{t.calculator.retirementAge}</Label>
            <Select value={retirementAge} onValueChange={handleRetirementAgeChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={t.calculator.retirementAgePlaceholder} />
              </SelectTrigger>
              <SelectContent>
                {[55, 57, 58, 59, 60, 62, 65, 67, 70].map((age) => (
                  <SelectItem key={age} value={String(age)}>
                    {age}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>{t.calculator.multiplier}</Label>
            <p className="text-sm font-medium py-2">{multiplier}%</p>
          </div>
        </CardContent>
      </Card>

      <Card className={hasInput ? "" : "opacity-60"}>
        <CardHeader>
          <CardTitle>{t.calculator.estimatedPension}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-muted-foreground">{t.calculator.monthlyPension}</p>
              <p className="text-3xl font-bold text-primary">
                ${hasInput ? monthlyPension.toLocaleString("en-US", { maximumFractionDigits: 0 }) : "---"}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{t.calculator.annualPension}</p>
              <p className="text-3xl font-bold text-primary">
                ${hasInput ? annualPension.toLocaleString("en-US", { maximumFractionDigits: 0 }) : "---"}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-muted-foreground">{t.calculator.replacementRate}</p>
              <p className="text-2xl font-semibold text-foreground">
                {hasInput ? `${replacementRate.toFixed(1)}%` : "---"}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{t.calculator.incomeGap}</p>
              <p className="text-2xl font-semibold text-destructive">
                {hasInput ? `${incomeGap.toFixed(1)}%` : "---"}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {t.calculator.incomeGapDetail}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                {t.calculator.totalYears}
              </p>
              <p className="text-2xl font-semibold text-foreground">
                {hasInput ? totalYears.toFixed(0) : "---"}
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-muted p-4">
            <p className="text-xs font-medium text-muted-foreground mb-1">
              {t.calculator.formulaLabel}
            </p>
            <p className="text-sm text-foreground">
              {t.calculator.formula}
            </p>
          </div>

          {hasInput && incomeGap > 0 && (
            <div className="rounded-lg border-2 border-primary bg-primary/5 p-4 text-center">
              <p className="text-sm font-medium text-foreground">
                {t.calculator.incomeGapCta}
              </p>
            </div>
          )}

          <p className="text-xs text-muted-foreground leading-relaxed">
            {t.calculator.disclaimer}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
