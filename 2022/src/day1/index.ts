import { parseGroupedNumbers } from '../utils/parser';
import { sum } from '../utils/reduce';

export const run = (input: string) =>
  parseGroupedNumbers(input)
    .map((calorieGroup) => calorieGroup.reduce(sum, 0))
    .sort((a, b) => b - a)
    .at(0);

console.log(
  run(`20576
    21113
    1865
    
    2343
    3759
    4671
    3514
    6866
    4546
    3609
    6326
    5906
    5442
    5195
    5583
    2710
    
    16332
    2699
    3741
    7185
    5896
    
    2267
    3893
    2980
    2947
    3050
    4802
    3632
    3782
    3496
    2039
    5480
    4251
    1354
    4110
    3729
    
    18422
    14719
    12219
    9338
    
    3508
    14810
    7562
    
    26427
    
    50479
    
    3728
    2075
    2833
    3230
    5686
    4192
    6422
    3889
    3909
    5401
    2133
    4783
    4033
    
    5427
    5821
    5961
    2101
    5372
    3020
    1967
    1515
    3524
    1501
    5739
    4338
    1101
    1814
    
    31305
    16702
    
    4486
    9183
    8344
    12223
    7689
    3016
    
    8393
    8685
    13413
    10985
    8315
    3788
    
    13014
    3271
    9400
    1992
    12994
    
    11346
    10251
    4907
    10542
    7255
    1851
    10403
    
    54808
    
    22212
    20801
    21801
    
    5884
    5430
    2035
    1874
    12640
    8107
    
    5482
    6859
    5162
    8539
    6095
    5773
    6728
    1805
    
    4318
    7332
    3963
    8325
    1885
    2389
    5016
    3755
    2506
    7459
    
    8462
    8625
    5314
    4225
    4490
    5034
    5831
    9497
    
    1372
    4798
    1102
    3997
    3807
    2653
    1825
    1917
    3496
    3109
    5821
    2541
    1985
    5603
    4429
    
    2610
    2675
    4421
    6752
    9773
    11199
    
    1461
    4542
    3911
    5062
    2511
    2698
    2349
    1237
    5175
    5261
    2584
    5874
    4620
    
    3224
    2819
    3777
    1928
    5084
    4794
    6603
    5089
    1712
    3575
    6366
    4996
    
    11590
    15298
    
    1732
    5735
    4073
    8618
    3323
    9048
    4057
    1730
    1352
    
    6099
    4661
    4859
    6238
    5420
    4029
    6304
    4408
    1153
    3267
    5079
    5316
    4313
    2053
    
    3558
    7386
    4576
    3634
    5316
    2514
    10040
    1142
    
    6295
    7089
    3635
    7431
    4617
    1446
    2176
    3275
    2918
    1017
    4783
    7275
    
    5394
    6103
    12373
    11996
    11705
    
    7358
    1411
    6453
    8222
    2769
    1876
    
    11664
    23449
    
    5790
    5169
    5938
    4629
    7410
    2332
    4168
    3862
    
    1178
    2663
    1199
    2213
    2130
    4467
    5858
    2299
    5782
    1258
    2804
    2389
    3189
    5331
    1504
    
    20440
    
    14518
    37385
    
    3145
    3261
    6673
    10868
    5418
    5314
    
    11363
    32647
    
    43296
    
    15894
    13236
    15512
    5712
    14246
    
    6781
    2578
    5618
    5439
    10274
    1150
    9670
    
    14103
    14290
    18309
    
    2913
    5225
    6490
    6106
    9720
    3185
    5319
    7907
    
    4639
    8200
    7643
    6855
    3179
    7296
    1722
    3701
    7727
    4696
    
    7122
    1790
    1000
    1669
    4656
    1074
    5694
    3842
    2869
    5367
    4835
    5366
    
    4403
    29252
    
    1334
    3957
    6116
    3518
    4336
    5956
    2847
    5139
    4145
    2381
    1033
    1090
    3084
    1006
    5445
    
    1266
    8219
    11975
    1448
    4872
    5952
    11836
    
    47039
    
    2057
    1384
    12248
    5983
    14939
    
    3365
    1461
    5510
    4133
    5086
    5883
    5206
    1646
    5123
    5439
    2604
    3940
    5788
    
    3323
    1300
    5903
    2394
    3720
    3032
    3626
    2745
    1506
    4918
    3444
    4036
    5288
    4577
    1312
    
    3799
    4433
    2101
    1111
    1416
    2845
    3917
    3831
    3914
    1470
    5090
    4247
    5826
    4868
    3098
    
    10489
    3303
    14002
    
    8497
    8272
    10026
    7923
    1514
    4377
    
    10675
    6889
    
    2209
    1843
    3090
    2872
    3131
    3253
    1451
    4466
    4324
    1846
    5920
    2230
    5032
    4709
    5093
    
    8069
    2206
    7783
    8083
    2719
    7609
    10018
    5760
    
    18179
    5920
    19231
    10281
    
    8784
    3672
    8468
    5364
    6517
    7935
    6765
    4531
    3725
    
    7255
    5920
    7198
    6102
    3508
    6387
    7393
    1369
    5819
    5501
    4246
    3924
    
    3015
    1547
    2789
    5256
    3726
    3730
    3927
    3119
    6072
    5975
    1699
    1298
    1143
    3060
    3621
    
    4768
    4440
    3737
    6842
    4013
    2782
    4355
    6429
    2795
    6119
    
    8073
    4257
    6133
    8704
    7760
    1856
    6286
    9540
    4001
    
    12220
    2290
    11849
    5142
    11334
    2195
    
    7417
    2521
    6307
    4973
    6115
    4711
    6979
    5766
    4693
    7093
    5102
    6243
    
    5545
    5788
    6456
    3505
    1417
    2795
    1332
    2246
    5923
    4595
    2625
    5600
    6882
    
    5151
    1836
    1749
    9667
    5727
    6016
    5880
    8658
    5713
    
    11762
    19759
    16927
    1676
    
    1416
    2057
    7261
    6409
    2761
    10013
    4271
    5663
    
    4043
    13430
    5809
    5137
    5567
    7237
    
    2272
    2910
    2347
    4139
    4200
    1151
    2200
    1080
    2377
    1025
    2121
    5555
    4991
    4064
    1581
    
    4410
    5763
    7428
    2523
    4697
    3205
    2112
    7267
    5998
    5260
    2638
    
    24158
    11935
    16422
    
    5646
    8050
    9167
    4442
    8747
    5644
    1432
    9406
    5271
    
    6935
    5132
    3932
    1403
    3481
    6183
    1379
    3481
    5295
    2469
    6071
    
    1391
    3909
    3709
    4322
    5556
    5680
    3847
    6440
    1186
    3125
    3309
    1926
    5055
    
    6720
    2591
    5190
    5752
    6945
    1449
    2342
    5203
    6876
    3126
    5756
    3276
    6033
    
    4172
    4948
    3283
    4148
    5099
    1986
    5267
    4268
    2269
    4827
    1848
    2069
    4351
    5824
    3392
    
    27910
    3719
    
    1614
    4131
    3647
    1986
    4052
    3567
    6704
    2935
    5863
    4276
    3894
    5633
    
    4661
    3119
    12461
    6511
    
    8508
    9046
    9839
    9767
    11123
    11641
    10796
    
    18066
    13926
    12845
    16772
    
    3277
    4231
    6197
    3835
    5077
    1997
    4358
    3227
    4468
    3439
    5138
    2119
    5151
    
    2154
    7536
    8238
    5169
    7593
    4794
    1380
    4787
    3160
    
    4112
    5593
    1909
    3865
    4222
    5857
    6345
    5754
    6790
    3949
    2151
    6559
    1628
    
    4379
    2228
    5188
    4142
    1701
    5397
    3658
    1239
    2550
    4179
    5389
    2819
    3685
    2996
    
    11002
    13882
    3882
    13706
    11087
    5838
    
    10144
    10584
    5002
    9792
    5020
    2086
    9097
    2954
    
    7171
    2630
    8183
    6856
    5022
    2334
    2581
    5043
    7984
    6596
    
    37145
    
    7820
    3645
    3311
    10883
    6330
    8016
    10794
    
    6262
    5203
    5709
    5080
    5320
    2562
    4604
    4126
    4549
    5592
    7500
    
    1823
    6193
    
    14600
    1724
    12158
    3864
    2486
    
    1401
    10132
    16192
    11882
    
    4823
    1689
    2524
    6377
    7431
    4357
    3713
    7343
    3457
    6712
    3012
    2947
    
    18318
    
    30203
    24835
    
    4292
    1221
    5654
    5428
    5278
    1575
    4268
    6023
    3891
    6261
    5178
    1550
    1173
    4501
    
    3036
    12480
    8453
    7215
    3536
    
    6244
    5588
    2211
    9838
    10042
    4662
    
    7163
    7724
    6376
    3915
    3922
    5919
    9180
    4421
    3726
    
    6044
    2245
    9227
    6569
    11782
    2494
    1405
    
    2826
    3400
    4664
    5917
    2934
    2817
    2686
    3770
    4318
    2659
    3960
    3752
    2592
    3016
    
    3542
    4286
    4291
    1668
    2999
    4739
    1226
    3063
    2509
    4095
    2918
    4427
    3673
    2312
    
    10232
    6672
    2804
    5236
    10466
    6948
    4811
    8435
    
    7315
    9233
    9488
    7129
    3549
    8730
    2150
    4258
    
    1510
    1286
    1316
    4569
    4419
    1288
    3313
    1076
    2955
    1837
    1263
    3531
    5726
    3300
    4617
    
    2779
    9026
    4720
    3817
    3701
    9456
    2337
    9127
    8076
    
    4113
    7168
    7030
    3438
    1686
    5641
    5282
    5710
    7170
    7722
    1365
    
    14199
    4119
    6337
    
    7418
    16770
    12037
    
    6225
    4693
    5303
    2626
    1008
    4163
    2985
    1425
    4092
    5396
    3417
    6143
    6499
    5619
    
    1133
    3945
    4897
    4828
    3642
    2893
    1732
    1247
    1963
    5962
    4106
    3387
    4829
    2595
    5867
    
    6122
    3406
    6933
    5611
    1044
    4815
    5767
    2562
    2197
    6550
    5551
    3119
    
    2901
    6744
    3204
    2822
    5068
    4457
    1079
    
    4452
    1253
    3943
    6092
    1706
    4791
    3951
    2090
    3114
    1515
    2004
    3980
    6366
    1771
    
    13893
    11323
    13829
    7168
    14871
    
    4796
    2089
    7885
    8628
    6715
    4143
    1381
    1412
    5611
    3672
    
    3768
    4839
    3066
    12255
    2517
    5999
    
    1810
    2477
    4634
    3880
    5517
    4773
    6438
    5496
    3528
    3022
    5048
    1612
    
    12728
    11268
    4727
    6643
    6186
    5735
    
    5856
    4873
    2587
    3053
    2763
    1681
    1641
    4235
    1895
    2865
    3886
    1090
    
    7837
    3957
    7666
    15287
    4153
    
    33476
    15842
    
    20446
    28621
    
    4257
    2252
    5779
    2424
    3048
    4297
    6185
    3896
    
    5005
    2248
    4388
    5507
    7246
    5802
    4730
    6816
    1882
    3101
    6888
    7312
    
    4287
    16345
    11713
    1141
    1576
    
    5534
    13649
    2963
    10251
    8072
    
    46888
    
    19996
    
    6251
    1783
    2931
    9216
    5802
    6353
    5406
    10761
    
    8964
    6194
    5594
    2981
    4283
    5227
    1111
    
    3768
    4065
    1420
    6334
    7126
    3430
    
    6369
    2958
    2548
    7475
    6389
    5121
    8008
    1957
    4481
    8452
    
    2985
    7921
    7868
    9901
    4221
    8815
    
    12828
    35189
    
    6415
    3009
    2332
    6851
    5956
    1894
    6421
    4728
    6698
    3628
    2004
    6174
    5251
    
    5518
    4788
    1959
    5935
    7906
    6064
    5242
    4082
    8573
    4529
    
    68508
    
    3847
    3451
    8433
    5073
    4464
    7378
    8997
    8107
    7266
    
    3750
    3841
    4113
    5005
    4238
    1316
    4027
    3120
    6083
    3892
    6303
    6364
    1699
    5665
    
    2863
    5168
    2244
    2180
    6794
    5924
    5793
    2997
    4871
    7578
    1821
    
    2717
    1900
    4743
    6280
    8703
    1225
    2711
    5260
    3870
    7283
    
    4323
    9508
    3221
    8294
    4081
    8086
    5465
    10185
    
    6295
    9301
    2663
    9299
    8681
    2628
    5173
    8236
    
    1093
    6211
    6172
    3120
    1545
    5010
    2555
    4503
    6041
    2256
    2054
    3556
    4189
    4079
    
    4227
    5046
    10539
    
    16145
    12616
    1897
    
    10759
    13443
    2817
    5487
    7129
    13704
    
    9237
    9637
    5517
    5033
    7727
    5903
    7685
    6360
    9147
    
    11730
    6487
    7984
    4641
    10800
    10737
    
    2926
    3365
    10511
    1019
    5174
    6880
    10022
    2021
    
    7561
    1995
    2056
    9535
    12687
    11037
    
    2986
    7624
    4960
    3148
    3615
    1248
    6271
    7689
    6203
    
    2078
    6126
    2217
    3778
    2469
    2940
    1009
    3727
    3591
    4631
    6934
    5679
    5212
    
    7293
    8422
    1249
    9071
    2397
    9070
    7249
    5900
    8496
    
    18221
    12199
    23082
    
    2756
    2031
    15919
    8850
    11519
    
    4213
    4007
    4750
    1689
    6301
    2769
    1822
    5633
    3829
    6259
    1941
    
    4566
    11741
    2449
    9639
    2853
    
    5442
    2931
    3418
    2474
    5999
    3614
    1092
    5745
    2216
    5437
    4653
    1596
    2064
    4568
    3889
    
    30188
    30811
    
    6631
    7390
    4365
    10085
    5771
    5407
    
    5994
    4371
    4328
    4888
    2557
    4400
    1917
    2487
    5787
    4068
    1608
    4897
    1872
    3580
    1828
    
    12407
    15919
    18883
    10093
    
    10235
    18157
    10243
    
    5020
    7857
    7218
    4726
    5184
    4807
    5762
    6433
    4435
    3292
    2582
    
    5435
    3279
    1483
    2174
    4082
    2016
    3470
    1106
    3156
    5028
    3973
    3309
    4918
    4886
    
    5234
    9601
    9386
    4696
    5400
    3738
    4093
    
    3468
    
    2988
    13322
    16091
    6182
    
    8902
    14057
    24074
    
    2417
    5580
    5165
    7582
    6674
    6646
    2562
    7885
    
    4197
    5211
    2837
    6012
    6525
    4345
    3060
    4458
    6405
    6556
    1167
    2705
    
    3137
    4709
    5239
    3930
    2685
    5421
    2847
    2443
    3801
    3067
    4431
    1073
    6625
    
    25928
    
    11278
    3062
    7704
    7328
    2742
    7913
    10850
    
    4179
    3352
    
    5766
    2479
    5510
    2723
    1559
    4851
    2808
    3149
    1900
    5551
    1168
    4292
    2706
    1887
    
    5644
    3980
    1953
    1302
    4673
    4792
    5560
    4700
    2098
    4581
    2026
    3986
    3621
    2729
    2734
    
    1634
    1891
    5864
    3643
    1622
    1096
    3405
    3519
    4975
    4773
    4544
    4211
    2889
    5510
    5677
    
    5747
    3716
    1570
    4609
    3562
    1537
    5157
    4558
    4131
    4544
    4445
    5116
    2357
    
    8035
    15475
    8791
    12796
    1809
    
    3956
    3423
    
    4498
    14291
    5435
    11333
    12805
    
    16130
    15515
    8077
    5292
    14806
    
    5441
    7830
    8229
    19304
    
    6133
    6807
    5145
    3100
    2799
    6450
    2844
    7369
    5750
    7453
    6917
    5280
    
    7733
    6790
    3399
    9413
    9225
    7820
    3627
    
    10128
    5460
    6217
    1468
    5069
    1867
    2561
    3563
    
    6203
    1220
    5422
    9143
    8279
    9127
    2197
    7563
    5805
    
    5641
    4988
    3833
    6330
    5125
    4818
    4985
    5806
    2835
    2538
    4243
    3944
    1313
    5633
    
    1670
    3783
    5004
    9925
    2056
    8138
    2273
    5211
    
    7054
    3876
    4804
    5782
    2864
    4869
    3974
    3365
    7392
    1003
    3421
    2282
    
    16982
    10310
    9105
    15909
    
    4006
    4721
    1089
    3784
    3735
    1462
    3572
    3903
    5100
    3553
    4538
    5008
    3474
    6114
    5023
    
    7712
    3772
    6012
    3780
    2039
    1225
    4572
    7205
    3724
    2743
    5649
    
    13835
    16341
    
    2440
    3526
    5922
    4275
    6518
    7738
    4511
    9176
    6738
    
    8973
    1525
    11024
    10053
    1167
    
    6878
    6330
    2436
    6166
    6009
    5824
    5849
    7599
    7667
    
    6661
    32224
    
    4835
    4152
    5550
    17374
    
    4829
    11255
    11845
    8734
    11026
    12040
    2598
    
    5651
    8148
    7319
    7168
    2570
    2667
    6102
    7372
    1901
    
    5257
    1897
    5295
    2643
    6499
    6384
    1979
    4897
    6198
    4986
    4463
    6078
    1669
    
    36617
    9770
    
    5488
    18324
    3889
    2697
    
    3909
    5302
    7668
    4954
    4574
    7610
    4162
    1222
    5727
    4826
    4429
    
    50529
    
    4561
    7022
    7778
    7386
    2126
    1350
    8767
    1089
    4340
    1013
    
    2218
    6429
    5964
    1643
    1181
    6695
    6759
    1766
    2985
    3029
    6439
    2646
    6814
    
    53117
    
    9836
    6608
    13067
    4747
    10627
    7074
    
    7382
    7263
    2142
    2197
    3237
    4509
    6866
    1487
    6288
    3515
    4318
    4403
    
    9503
    7732
    9320
    4184
    4429
    10334
    3313
    5438
    
    15150
    15460
    14761
    8079
    1070
    
    2206
    6973
    7571
    2311
    3170
    8153
    7794
    9043
    3857
    
    4169
    3297
    1703
    6039
    1189
    4565
    5455
    1584
    4338
    1759
    1854
    1093
    5004
    1133
    2004
    
    5262
    3782
    2259
    5446
    2978
    6146
    1939
    1805
    4517
    2969
    6390
    2784
    3689
    
    10342
    6089
    7688
    10383
    4769
    7696
    7393
    10301
    
    6666
    10943
    1638
    1975
    5509
    5767
    5673
    
    15320
    23126
    
    2813
    7182
    3956
    7486
    10251
    4172
    1862
    4006
    
    15496
    4847
    8430
    1683
    13281
    
    4685
    3580
    1308
    8183
    6367
    8410
    3052
    3020
    1217
    
    4252
    5883
    4079
    3580
    3064
    1385
    4488
    1790
    4826
    3157
    1747
    1783
    3312
    4652
    
    14551
    
    3025
    13696
    3537
    4087
    
    6169
    5270
    5187
    3572
    3060
    3599
    4252
    4886
    5244
    5231
    1359
    6340
    2142
    4429
    
    5850
    4447
    7828
    4518
    6431
    5995
    1284
    5499
    1372
    2666
    7721
    
    1191
    20856
    
    13838
    2247
    12654
    11027
    9684
    
    4997
    8716
    6293
    7317
    1002
    5121
    6663
    7838
    1922
    8001
    
    5614
    13883
    2757
    11574
    3051
    11435
    
    45664
    
    2476
    7792
    8480
    7283
    9042
    7090
    5830
    
    2721
    6238
    8011
    1974
    3526
    2811
    6167
    1778
    3507
    7992
    
    3082
    4367
    4463
    1753
    3627
    1468
    2616
    1456
    1033
    1110
    2453
    5058
    1665
    4399
    5720
    
    4019
    6080
    5496
    3896
    5752
    2673
    2460
    2284
    6342
    1710
    3860
    1223
    4688
    
    1121
    3153
    2961
    2103
    3816
    6492
    5483
    2086
    6154
    4440
    3196
    1630
    3140
    
    4140
    6238
    1092
    1218
    5688
    6097
    5695
    3413
    9453
    
    29041
    
    3320
    10344
    21501
    
    8209
    11402
    11152
    6367
    5191
    8598
    8608
    
    12087
    24388
    22987
    
    1668
    3447
    7162
    6136
    5098
    1868
    2116
    2716
    1715
    1089
    5410
    5259
    
    5913
    3696
    2832
    5618
    3555
    1311
    3641
    2488
    4987
    2104
    2269
    3040
    1706
    3762
    2384
    
    6731
    2310
    3908
    6314
    1004
    4632
    3402
    2044
    3407
    2833
    1007
    4695
    
    4894
    9624`)
);
